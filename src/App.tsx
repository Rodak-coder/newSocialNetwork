import React from 'react';
// import logo from './logo.svg';
import './App.css';
/*import {findAllByDisplayValue} from "@testing-library/react";*/
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";


function App() {
    return (
        <div>
            <PageTitle title={"Chomp on this"}/>
            <PageTitle title={"B!"}/>
            Article 1
            <Rating value={4}/>
            <Accordion titleValue={"Yeeeh"} collapsed={true}/>
            <Accordion titleValue={"Nooo"} collapsed={false}/>
            Article 2
            <Rating value={1}/>
        </div>
    )
}

type PageTitlePropsType = {
    title: string
}
  function PageTitle(props: PageTitlePropsType){
      return <h1>{ props.title }</h1>
  }


export default App;

