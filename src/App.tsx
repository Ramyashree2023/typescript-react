import React from "react";
import Navbar from "./Navbar";
import Counter from "./Couter";


export default function App() {
  return (

    <div>
      <h1>Hello </h1>
      <Navbar Name="Ramyashree" Description=" "/>
      <h1>Welcome to the Counter App</h1>
      <Counter initialCount={10} />
      </div>
        
        )
}