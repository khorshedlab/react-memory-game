import React, { createContext, useState } from "react";
export const gameContext = createContext();
export default function GameContextProvider({ children }) {
  //Game score
  const [gameScore, setGameScore] = useState(0);

  //keeping eyes on game is it ends yet or not
  const [end, setEnd] = useState(false);

  //state to hold array
  const [gridList, setGridList] = useState("");

  //to create game data
  const setGrid = (level) => {
    let newArr = [];
    //Creating a array with same value \ array length depends on level;

    for (let index = 1; index <= level * 3; index++) {
      newArr.push({ key: index, active: false });
    }
    // shuffling index to the created array & slicing item
    let shuffledArr = newArr.sort(() => 0.5 - Math.random()).slice(0, level);

    //getting random active number
    let randomizeArr = newArr.map((i) => {
      const item2 = shuffledArr.find((i2) => i2.key === i.key);
      return item2 ? { ...i, active: true } : i;
    });
    // shuffling again to change index to final array
    const finalArr = randomizeArr.sort(() => 0.5 - Math.random());
    setGridList(finalArr);
  };
  return (
    <gameContext.Provider
      value={{
        gameScore,
        setGameScore,
        end,
        setEnd,
        gridList,
        setGrid,
        setGridList,
      }}
    >
      {children}
    </gameContext.Provider>
  );
}
