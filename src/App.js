import './App.css';
import './App.scss';
import data from "./quotes.json"
import Renderer from './Elements/Renderer';
import  Button  from 'react-bootstrap/Button';
import { useState } from 'react';

function App() {
  const [current,setCurrent]=useState(Math.floor(Math.random() * 48390));
  const updateQuote=() => {
    let temp =Math.floor(Math.random() * 48390);
    while (data[temp].Quote.length > 250) {
      console.log("sad")
      temp =Math.floor(Math.random() * 48390);
    }
    setCurrent(temp);
    console.log(current);
  };
  return (
    <div className="App d-flex flex-column justify-content-center gap-4 rounded border border-light" style={{padding : "25px"}}>
      <Renderer Quote={data[current].Quote} Author={data[current].Author} quoteStyle="quote text-primary" authorStyle="author text-secondary"/>
      <Button onClick={updateQuote} variant="info" className='Gen align-self-center'>Generate Anew</Button>
    </div>
  );
}

export default App;
