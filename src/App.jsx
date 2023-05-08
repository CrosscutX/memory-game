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
import Theme from "./assets/victory-theme.mp3";
import "./App.css";
import Cards from "./Components/Cards";

export default function App() {
  const [images, setImages] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [win, setWin] = useState(false);
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
  //Use effect needed to keep bestScore up to date with score.
  useEffect(() => {
    if (bestScore < score) {
      setBestScore(score);
    }
  }, [score]);
  //Check bestscore for wincon
  useEffect(() => {
    if (bestScore === 18) {
      setWin(true);
    }
  }, [bestScore]);

  function checkClick(id, clicked) {
    if (clicked === false) {
      //if the object wasn't checked already, add it to the array as checked.
      addClicked(id);
      scoreIncrement();
    } else {
      //Else the game is lost, and we reset everything.
      setScore(0);
      resetClicked();
    }
    randomizeCards();
  }

  function addClicked(id) {
    setImages((prev) => {
      let newArray = [];
      for (let i = 0; i < images.length; i++) {
        if (prev[i].id === id) {
          prev[i].clicked = true;
          newArray.push(prev[i]);
        } else {
          newArray.push(prev[i]);
        }
      }
      return newArray;
    });
  }

  function resetClicked() {
    setImages((prev) => {
      let newArray = [];
      for (let i = 0; i < images.length; i++) {
        prev[i].clicked = false;
        newArray.push(prev[i]);
      }
      return newArray;
    });
  }

  function scoreIncrement() {
    setScore((prev) => {
      prev = prev + 1;
      return prev;
    });
  }
  //A shuffling algorithm from stack overflow, allows me to randomly replace each array value.
  function randomizeCards() {
    setImages((prev) => {
      return prev
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    });
  }

  displayedImages = images.map((imageObject) => {
    return (
      <Cards
        key={imageObject.id}
        id={imageObject.id}
        image={imageObject.image}
        clicked={imageObject.clicked}
        checkClick={checkClick}
      />
    );
  });
  return (
    <div className="app">
      <header>
        <h1>Memory Fighter</h1>
        <div className="score">
          <span>Score: {score}</span>
          <span>Best Score: {bestScore}</span>
        </div>
      </header>
      {win === false && <div className="card-section">{displayedImages}</div>}
      {win === true && (
        <div className="win-screen">
          <h1>Congratulations warrior! </h1>
          <h2>
            You have a keen mind that remembers even the smallest details. You
            seem like a force to be reckoned with on the streets!
          </h2>
          <audio src={Theme} controls></audio>
          <button
            type="button"
            onClick={() => {
              location.reload();
            }}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}
