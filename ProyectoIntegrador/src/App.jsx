import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import React from 'react';
import axios from 'axios';
import { Route, Routes, useLocation } from 'react-router-dom';
import Detail from './components/Detail/Detail.jsx';
import About from './components/About/About.jsx';
import Error from './components/Error/Error.jsx';
import Form from './components/Form/Form.jsx';

function App() {
   let memory = [];

   const [characters, setCharacters] = React.useState([]);
   //https://rym2-production.up.railway.app/api/character/$%7Bid%7D?key=henrym-usuariodegithub
   function searchHandler(id) {
      if(!memory.includes(id)){
         memory.push(id);
         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
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
   }

   function randomHandler() {
      let random = (Math.random()*826).toFixed();
      random = Number(random);

      if(!memory.includes(random)){   
         memory.push(random);      
         axios(`https://rickandmortyapi.com/api/character/${random}`).then(({ data }) => {
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

   return (
      <div className='App'>
         {location.pathname !== '/' ? 
         <Nav onSearch={searchHandler} randomize={randomHandler}></Nav> : null}
         <Routes>
            <Route
            path='/'
            element={<Form/>}
            />
              
            <Route   
            path='/home'
            element={<Cards characters={characters} onClose={closeHandler}/>}
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
            path='*'
            element ={<Error/>}
            />
         </Routes>

         
      </div>
   );
}

export default App;
