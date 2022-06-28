import React, { useContext } from "react";
import Home from "./Home";
import Game from "./Game";
import { gameContext } from "./context/gameContext";

export default function App() {
  const { gridList } = useContext(gameContext);
  return <>{gridList.length > 0 ? <Game /> : <Home />}</>;
}
