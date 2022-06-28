import { useState, useContext, useEffect } from "react";
import "./styles/Game.scss";
import { gameContext } from "./context/gameContext";
import Grid from "./Grid";

function Game() {
  const {
    gameScore,
    setGameScore,
    end,
    setEnd,
    gridList,
    setGridList,
    setGrid,
  } = useContext(gameContext);
  const [list, setList] = useState([]);
  const [finishedGrid, setFinishedGrid] = useState(1);

  useEffect(() => {
    setList(gridList);
  }, [gridList]);

  const resetGame = () => {
    setGameScore("");
    setGridList("");
    setEnd(false);
  };
  const playAgain = () => {
    setGameScore(0);
    setGrid(gridList.length / 3);
    setFinishedGrid(1);
    setEnd(false);
  };
  return (
    <div className="Game">
      <div className="Game__container">
        <div className="Game__header">
          <p className="Game__score">
            Score: {gameScore <= 9 ? `0${gameScore}` : gameScore}
          </p>
          <button onClick={resetGame} className="Game__back-btn">
            Back
          </button>
        </div>
        <div className="Game__field">
          {list.map((i) => (
            <Grid
              func={{ finishedGrid, setFinishedGrid }}
              item={i}
              length={list.length}
              key={i.key}
            />
          ))}
        </div>
        {end && (
          <div className="Game__notice__wrapper">
            <div className="Game__notice">
              <span className="Game__notice__emoji">💔</span>
              <h2 className="Game__notice__title">You Lose!</h2>
              <h3 className="Game__notice__score">
                Your Score is : {gameScore}
              </h3>
              <div className="Game__notice__btn-group">
                <button className="Game__notice__btn" onClick={resetGame}>
                  Home
                </button>
                <button
                  onClick={playAgain}
                  className="Game__notice__btn Game__notice__btn--modified"
                >
                  Play Again?
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Game;
