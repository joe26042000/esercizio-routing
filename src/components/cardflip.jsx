import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import "./cardflip.css";

function CardFlip(props) {
  const [pokemon, setPokemon] = useState();

  async function fetchPokemon() {
    const risultato = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" + props.id
    );
    const data = await risultato.json();
    setPokemon(data);
  }

  useEffect(() => {
    fetchPokemon();
  }, [props.id]);

  return (
    <Link>
      <div className="card">
        <div className="content">
          <div className="back">
            <div className="back-content">
              <img style={{ width: "100%" }} src={props.image} />
            </div>
          </div>
          <div className="front">
            <div className="img">
              <img
                style={{ width: "100%" }}
                src={props.image}
                className="imageBlur"
              />

              {/*   <div className="circle" id="right"></div>
            <div className="circle" id="bottom"></div> */}
            </div>

            <div className="front-content">
              <small className="badge">
                {" "}
                {pokemon?.types?.map((item) => (
                  <>
                    <span>{item?.type?.name}</span> <br />
                  </>
                ))}
              </small>
              <div className="description">
                <div className="title">
                  <p className="title">
                    <strong>{props.name}</strong>
                  </p> 
               
                </div>
                <p className="card-footer">&nbsp; &nbsp; </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardFlip;
