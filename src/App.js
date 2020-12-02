import React from 'react';
import RequestForm from './RequestForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

function App() {

  let mainContainterStyle = {
    border: "1px solid #cecece", 
    borderRadius: "10px", 
    margin: "10px auto",
    width: "95%"
  }

  return (
    <Container style={mainContainterStyle} fluid>
      <div className="text-center">
        <h1 >Sentence lengths</h1>
        <h6 >Get histogram of words per sentences</h6>
      </div>
      <div style={{padding: "15px"}}>
      <RequestForm />
      </div>
    </Container>
  );
}

export default App;
