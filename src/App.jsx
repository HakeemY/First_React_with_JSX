import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hello from "../components/hello";

function App() {
  return (
    <>
      <h1>Hello Dojo</h1>
      <p>Things I need to do:</p>
      <ul>
        <li>Learn React</li>
        <li>Climb Mt.Everest</li>
        <li>Run a marathon</li>
        <li>Feed the dogs</li>
      </ul>
    </>
  );
}

export default App;
