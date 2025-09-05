import react from 'react';
import {Link} from 'react-router-dom';
import Card from "../components/card";

function Index() {
    return (
        <div>
            <h1>welcome to index page</h1>
            <Link to="/about/123/joe"> vai in about joe</Link>
            <Link to="/about/456/sara"> vai in about sara</Link>
            <Link to="/about/789/ale"> vai in about ale</Link>
            <Card 
            id='123'
            name='joe'
            />
             <Card 
            id='456'
            name='sara'
            />
             <Card 
            id='789'
            name='ale'
            />
        </div>
    );
}

export default Index;
