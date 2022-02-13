import { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import useGif from "./useGif";

const api_key = process.env.Giph_API_Key;
export default function App() {
  const [gif, setGif] = useGif("");

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <img src={gif} />
      <br />
      <button onClick={setGif}>New Gif</button>
    </div>
  );
}
