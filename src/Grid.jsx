import React, { useContext } from "react";
import "./styles/Grid.scss";
import { gameContext } from "./context/gameContext";

function Grid({ length, item, func }) {
  //State;
  const [ds, setDs] = React.useState("block");
  const [isClicked, setIsClicked] = React.useState(false);

  //Context
  const { setEnd, end, setGameScore, gameScore, gridList, setGrid } =
    useContext(gameContext);

  // use effect
  React.useEffect(() => {
    setIsClicked(false);
    setDs("block");
    setTimeout(() => {
      setDs("none");
    }, 400);
  }, [gridList]);

  const checkIf = async () => {
    //parents function
    const { finishedGrid, setFinishedGrid } = func;
    //This line is necessary to disable grid after 1 click .That means 1 score for 1 Click;
    if (isClicked) return;

    if (item.active) {
      setIsClicked(true);
      setDs("block");
      setGameScore(Number(gameScore) + 1);
      setFinishedGrid(finishedGrid + 1);
      if (finishedGrid === gridList.length / 3) {
        setGrid(gridList.length / 3);
        setFinishedGrid(1);
      }
    } else {
      setEnd(true);
    }
  };

  return (
    <div
      onClick={checkIf}
      style={{
        backgroundColor: "rgba(255,255,255,.3)",
        width: 100 / (length / 3) - 2 + "%",
      }}
      className="grid"
    >
      {item.active && (
        <div
          style={{
            display: ds,
            backgroundColor: end ? "tomato" : "white",
          }}
          className="grid__color"
        ></div>
      )}
    </div>
  );
}

export default Grid;
