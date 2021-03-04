import React from 'react';
import { Container, Jumbotron, Button } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Jumbotron>
        <h1>Alpaca OAuth</h1>
        <p>
          This is a simple tutorial on how to connect to Google Firebase
        </p>
        <p>
          <Button variant="primary">Conenct to Alpaca</Button>
        </p>
      </Jumbotron>
    </Container>
   
  );
}

export default App;
