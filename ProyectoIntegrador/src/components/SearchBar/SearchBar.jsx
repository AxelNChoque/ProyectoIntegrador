import React from "react";

export default function SearchBar({onSearch}) {

   const [id, setId] = React.useState('');

   const changeHandler = event =>{
      let input = event.target.value;
      setId(input);
   }

   return (
      <div>
          <input type='search' 
          onChange={changeHandler}
          value={id}
          placeholder="Ingresa un personaje" 
          />
         <button onClick={()=>{onSearch(id)}}>Agregar</button> 
      </div>
   );
}
