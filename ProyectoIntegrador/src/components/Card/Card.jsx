import { NavLink } from "react-router-dom";

export default function Card(props) {
   let {onClose} = props;
   return (
      <div>
         <button onClick={
            ()=>{onClose(props.id)}
            }>X</button>
         <NavLink to={`/detail/${props.id}`}>
         <h2>Name: {props.name}</h2>
         </NavLink>
         <h2>Status: {props.status}</h2>
         <h2>Specie: {props.species}</h2>
         <h2>Gender: {props.gender}</h2>
         <img src={props.image} alt={props.name} /> 
      </div>
   );
}
