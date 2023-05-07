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
  //Initial setting of the images
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
      {
        id: 2,
        image: Jamie,
        name: "Jamie",
        clicked: false,
      },
      {
        id: 3,
        image: ChunLi,
        name: "Chun-Li",
        clicked: false,
      },
      {
        id: 4,
        image: Guile,
        name: "Guile",
        clicked: false,
      },
      {
        id: 5,
        image: Kimberly,
        name: "Kimberly",
        clicked: false,
      },
      {
        id: 6,
        image: Juri,
        name: "Juri",
        clicked: false,
      },
      {
        id: 7,
        image: Ken,
        name: "Ken",
        clicked: false,
      },
      {
        id: 8,
        image: Blanka,
        name: "Blanka",
        clicked: false,
      },
      {
        id: 9,
        image: Dhalsim,
        name: "Dhalsim",
        clicked: false,
      },
      {
        id: 10,
        image: EHonda,
        name: "Ehonda",
        clicked: false,
      },
      {
        id: 11,
        image: DeeJay,
        name: "DeeJay",
        clicked: false,
      },
      {
        id: 12,
        image: Manon,
        name: "Manon",
        clicked: false,
      },
      {
        id: 13,
        image: Marisa,
        name: "Marisa",
        clicked: false,
      },
      {
        id: 14,
        image: JP,
        name: "JP",
        clicked: false,
      },
      {
        id: 15,
        image: Zangief,
        name: "Zangief",
        clicked: false,
      },
      {
        id: 16,
        image: Lily,
        name: "Lily",
        clicked: false,
      },
      {
        id: 17,
        image: Cammy,
        name: "Cammy",
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
