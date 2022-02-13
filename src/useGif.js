import { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

const api_key = process.env.Giph_API_Key;
export default function useGif() {
  const [gif, setGif] = useState("");

  const fetchGif = async () => {
    let { data } = await axios.get(
      `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`
    );
    let image = data.data.images.downsized_medium.url;
    console.log(image);
    setGif(image);
  };
  useEffect(() => {
    fetchGif();
  }, []);
  return [gif, fetchGif];
}
