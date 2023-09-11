import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import Detail from './components/Detail/Detail.jsx';
import About from './components/About/About.jsx';
import Error from './components/Error/Error.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites';
import { removeFavorite } from './redux/actions/actions';
import style from './App.css?inline'

function App() {
   let memory = [];

   const [characters, setCharacters] = useState([]);
   //https://rym2-production.up.railway.app/api/character/$%7Bid%7D?key=henrym-usuariodegithub
   
   
   function searchHandler(id) {
      if(!memory.includes(id)){
         memory.push(id);
         axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
      } else {
         alert('Repetido');
      }
   }

   
   function closeHandler(id) {
      let filteredCharacters = characters.filter(
         (character) => character.id !== Number(id)
      );
      setCharacters(filteredCharacters);
      removeFavorite(id);
   }



   function randomHandler() {
      let random = (Math.random()*826).toFixed();
      random = Number(random);

      if(!memory.includes(random)){   
         memory.push(random);      
         axios(`http://localhost:3001/rickandmorty/character/${random}`).then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
      } else {
         alert('Repetido');
         return;
      }

   }
   let location = useLocation();


   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'axel@gmail.com';
   const PASSWORD = '123123a';

   function loginHandler(userData) {
      // if (userData.password === PASSWORD && userData.email === EMAIL) {
      //    setAccess(true);
      //    navigate('/home');
      // } else {
      //    alert('Wrong email or password');
      // }
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }

   const logoutHandler = () => {
      setAccess(false);
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);




   return (
      <div className={style.App}>
         {location.pathname !== '/' ? 
         <Nav 
            onSearch={searchHandler} 
            randomize={randomHandler}
            logout={logoutHandler}   
         /> : null}
         <Routes>
            <Route
            path='/'
            element={<Form login={loginHandler}/>}
            />
            <Route
            path='/favorites'
            element = {<Favorites/>}
            />
              
            <Route   
            path='/home'
            element={<Cards
               className={style.cardsContainer}
               characters={characters} 
               onClose={closeHandler}/>}
            />
            <Route   
            path='/detail/:id'
            element={<Detail/>}
            />
            <Route
            path='/about'
            element={<About/>}
            />
            <Route
            path="*"
            element ={<Error/>}
            />
         </Routes>

         
      </div>
   );
}

export default App;
