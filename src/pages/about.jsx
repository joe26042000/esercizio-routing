import react, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import users from "../data/user.json";
import Button from "@mui/material/Button";

function About() {
  const params = useParams();
  const [pokemon, setPokemon] = useState();

  async function fetchPokemon () {
    const risultato=await fetch (
      'https://pokeapi.co/api/v2/pokemon/'+ params.id
    );
    const data = await risultato.json();
    console.log (data);
    setPokemon (data);
  }

  useEffect(() => {
    fetchPokemon();
  },[params.id])

  return (
    <div>
      <h1>
        welcome to about page : ID -- {params.id} <br />
        NOME: {pokemon?.name}
        <br />
        ALTEZZA: {pokemon?.height}
        <br/>
        PESO: {pokemon?.weight}
     </h1> 
      
    </div>
  );
}



export default About;
