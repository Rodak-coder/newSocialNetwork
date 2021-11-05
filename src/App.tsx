import React from 'react';
import logo from './logo.svg';
import './App.css';
import {findAllByDisplayValue} from "@testing-library/react";


function App() {
  return (
      <div>
          <AppTitle />
          <Rating />
          <Accordion />
      </div>
  );

  function AppTitle(){
      return <>Chomp on this</>
  };

  function Rating() {
    return <>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
    </>
  };

  function Star() {
      return  <div>star</div>
  };

  function Accordion() {
      return <div>
          <AccordionTittle />
          <AccordionBody />
      </div>
  };

  function AccordionTittle() {
      return <h3>Menu</h3>
  };

  function AccordionBody() {
      return <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
      </ul>
  }

}

export default App;
