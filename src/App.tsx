import React from 'react';
import logo from './logo.svg';
import './App.css';
import {findAllByDisplayValue} from "@testing-library/react";
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";


function App() {
    return (
        <div>
            <input/>
            <input value={'yoyoyo'} type="date"/>
            <AppTitle/>
            <Rating/>
            <Accordion/>
        </div>
    )
}
  function AppTitle(){
      return <>Chomp on this</>
  }


export default App;

