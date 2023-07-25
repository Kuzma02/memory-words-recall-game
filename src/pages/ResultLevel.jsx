import React, { useContext } from "react";
import { MyContext } from "../contexts/MyContext";
import "../styles/ResultLevel.css";
import { useNavigate } from "react-router-dom";

export const ResultLevel = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();

  const { currentRandomWords, setCurrentRandomWords, recallWords, setRecallWords, currentLevel, setCurrentLevel,  } = context;

  const nextLevelGenerator = () => {
    setCurrentLevel(currentLevel+1);
    setCurrentRandomWords([]);
    setRecallWords([]);
    navigate("/remember-level");
  }

  const playAgain = () => {
    setCurrentLevel(1);
    setCurrentRandomWords([]);
    setRecallWords([]);
    navigate("/");
  }

  return (
    <div className="result-main">
      <div>
        <h1>Random words: </h1>
        <ol>
          {currentRandomWords.length
            ? currentRandomWords.map((word, id) => <li key={id}>{word}</li>)
            : "There are no random words generated"}
        </ol>
      </div>

      <div>
        <h1>Recalled Words: </h1>
        <ol>
          {recallWords.length
            ? recallWords.map((word, id) => <li key={id}>{word}</li>)
            : "There are no recall words"}
        </ol>
      </div>
      <div className="result-btns">
        <button className="result-btn-no" onClick={playAgain}>PLAY AGAIN</button>
        <button className="result-btn-yes" onClick={nextLevelGenerator}>NEXT LEVEL</button>
      </div>
    </div>
  );
};
