import React, { useContext } from "react";
import "./styles/Home.scss";
import { FaGithub } from "react-icons/fa";
import { gameContext } from "./context/gameContext";

export default function Home() {
  const { setGrid } = useContext(gameContext);
  const handleClick = (num) => {
    setGrid(num);
  };
  return (
    <div className="Home">
      <div className="Home__container">
        <h1 className="Home__title">React Memory Game</h1>
        <p className="Home__pera">
          This is a simple memory-game made with react js.
        </p>
        <ul className="Home__btn-group">
          <li className="Home__btn-container">
            <button onClick={() => handleClick(3)} className="Home__btn">
              Easy
            </button>
          </li>
          <li className="Home__btn-container">
            <button onClick={() => handleClick(4)} className="Home__btn">
              Medium
            </button>
          </li>
          <li className="Home__btn-container">
            <button onClick={() => handleClick(5)} className="Home__btn">
              Hard
            </button>
          </li>
        </ul>
        <div className="Home__link-container">
          <a
            href=" https://github.com/khorshedlab/react-memory-game"
            className="Home__link"
          >
            <FaGithub /> Github
          </a>
        </div>
      </div>
    </div>
  );
}
