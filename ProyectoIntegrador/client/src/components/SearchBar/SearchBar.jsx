import React from "react";
import style from './searchBar.module.css';

export default function SearchBar({onSearch}) {

   const [id, setId] = React.useState('');

   const changeHandler = event =>{
      let input = event.target.value;
      setId(input);
   }

   return (
      <div className={style.container}>
          <input
          className={style.input} 
          type='search' 
          onChange={changeHandler}
          value={id}
          placeholder="###" 
          maxLength='3'
          />
         <button
         className={style.addBtn} 
         onClick={()=>{onSearch(id)}}>Add</button> 
      </div>
   );
}
