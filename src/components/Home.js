import React, { useEffect } from "react";
//import Jumbotron from 'react-bootstrap/Jumbotron';
import { Button, Container } from "reactstrap";

const Home = ()=>{
    useEffect(()=>{
        document.title="Home";
    },[]);
    return(
        <dive>
            <h1 className="display-2">jumbotron is not working...</h1>
            <p>
                This is reactjs course application
            </p>
           <Container className="text-center bg-danger">
            <Button color="primary">click here!</Button>
           </Container>
        </dive>
    );
}

export default Home;