import { useState, useEffect } from "react";
//Image imports
import Ryu from "./assets/cards/ryu.jpg";
import Luke from "./assets/cards/luke.jpg";
import Jamie from "./assets/cards/jamie.jpg";
import ChunLi from "./assets/cards/chunli.jpg";
import Guile from "./assets/cards/guile.jpg";
import Kimberly from "./assets/cards/kimberly.jpg";
import Juri from "./assets/cards/juri.jpg";
import Ken from "./assets/cards/ken.jpg";
import Blanka from "./assets/cards/blanka.jpg";
import Dhalsim from "./assets/cards/dhalsim.jpg";
import EHonda from "./assets/cards/ehonda.jpg";
import DeeJay from "./assets/cards/deejay.jpg";
import Manon from "./assets/cards/manon.jpg";
import Marisa from "./assets/cards/marisa.jpg";
import JP from "./assets/cards/jp.jpg";
import Zangief from "./assets/cards/zangief.jpg";
import Lily from "./assets/cards/lily.jpg";
import Cammy from "./assets/cards/cammy.jpg";
import "./App.css";
import Cards from "./Components/Cards";

export default function App() {
  const [images, setImages] = useState([]);
  let displayedImages;
  useEffect(() => {
    setImages([
      {
        id: 0,
        image: Ryu,
        name: "Ryu",
        clicked: false,
      },
      {
        id: 1,
        image: Luke,
        name: "Luke",
        clicked: false,
      },
    ]);
  }, []);

  displayedImages = images.map((imageObject) => {
    return (
      <Cards
        key={imageObject.id}
        id={imageObject.id}
        image={imageObject.image}
        clicked={imageObject.clicked}
      />
    );
  });
  console.log(images);
  return (
    <div className="app">
      <header>
        <h1>Memory Fighter</h1>
        <div className="score">
          <span>Score: 0</span>
          <span>Best Score: 0</span>
        </div>
      </header>
      <div className="card-section">{displayedImages}</div>
    </div>
  );
}
