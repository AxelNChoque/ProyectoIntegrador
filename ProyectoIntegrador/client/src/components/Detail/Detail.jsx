import axios from "axios"
import React from "react"
import { useParams } from "react-router-dom"


export default function Detail() {
    let { id } = useParams();
    let [character, setCharacter] = React.useState({});

    React.useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    return ( 
        <div>
            <h2>Name: {character.name}</h2>
            <h2>Status: {character.status}</h2>
            <h2>Gender: {character.gender}</h2>
            <h2>Origin: {character.origin}</h2>
            <img src={character.image} alt={character.name} /> 
        </div>
    )
}