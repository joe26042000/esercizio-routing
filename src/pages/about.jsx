import react from 'react'
import { useParams } from "react-router-dom";

function About() {
    const params = useParams();
    return (
        <div>
            <h1>welcome to about page : ID -- {params.id} Nome: {params.name}</h1>
        </div>
    );
}

export default About;
