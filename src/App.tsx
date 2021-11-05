import React from 'react';
import logo from './logo.svg';
import './App.css';
import {findAllByDisplayValue} from "@testing-library/react";


function App() {
  return (
      <div>
      Chomp on this
          <Rating />
          <Accordion />
      </div>
  );

  function Rating() {
    return (
        <Star />
    )
  };

  function Star() {
      return (
          <div>
              <div>star</div>
              <div>star</div>
              <div>star</div>
              <div>star</div>
          </div>
      )
  }
  function Accordion() {
      return <div>
          <h3>Menu</h3>
          <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
          </ul>

      </div>
  }
}

export default App;
