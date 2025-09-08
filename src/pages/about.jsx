import react, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import users from "../data/user.json";
import Button from "@mui/material/Button";

function About() {
  const params = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    const utenteTrovato = users.find((item) => item.id === Number(params.id));
    console.log(utenteTrovato, "utente trovato");
    setUser(utenteTrovato);
  }, [params]);

  return (
    <div>
      <h1>
        welcome to about page : ID -- {params.id} <br />
        NOME: {user?.name}
        <br />
        EMAIL: {user?.email}
        <br />
        ETA: {user?.age}
        <br />
        CITTA: {user?.city}
      </h1>
      
    </div>
  );
}



export default About;
