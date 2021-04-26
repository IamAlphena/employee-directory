import { Jumbotron } from "react-bootstrap";
import React from "react";
import "./style.css"

function JumboTron() {
    return (
        <Jumbotron fluid>
        <h1>Employee Database</h1>
        <p>
          Please use the search bar to help find who you're looking for. 
        </p>
      </Jumbotron>
    )
}

export default JumboTron;