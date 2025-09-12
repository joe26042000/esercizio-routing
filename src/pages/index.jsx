import react, { useState } from "react";
import { Link } from "react-router-dom";
import CardMaterial from "../components/cardmaterial";
import Grid from "@mui/material/Grid";
import users from "../data/user.json";
import Button from "@mui/material/Button";
import Layout from "../components/layout";
import CardFlip from "../components/cardflip";

function Index() {
  const [pokemon, setPokemon] = useState([]);
  const [limit, setLimit] = useState();
  async function caricaPokemon() {
    console.log("caricaPokemon");
    const risultato = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=" + limit
    );
    const dati = await risultato.json();
    console.log(dati.results);
    setPokemon(dati.results);
  }

  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid size={12}>
          {" "}
          <h1>Catch 'em all!</h1>
          <input
            type="number"
            onChange={(e) => setLimit(e.target.value)}
          ></input>
          <Button variant="contained" onClick={() => caricaPokemon()}>
            Carica i pokemon
          </Button>
        </Grid>
        {pokemon.map((item, index) => {
          return (
            <Grid size={4}>
              <CardFlip
                id={index + 1}
                name={item.name}
                image={
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
                  (index + 1) +
                  ".png"
                }
              />

              <CardMaterial
                id={index + 1}
                name={item.name}
                image={
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
                  (index + 1) +
                  ".png"
                }
              />
            </Grid>
          );
        })}
      </Grid>
    </Layout>
  );
}

export default Index;
