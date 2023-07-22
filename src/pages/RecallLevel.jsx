import React, { useContext } from "react";
import { MyContext } from "../contexts/MyContext";
import "../styles/RecallLevel.css";
import { Link } from "react-router-dom";

export const RecallLevel = () => {
  const context = useContext(MyContext);

  const { currentRandomWords, recallWords, setRecallWords } = context;

  const enterWordFun = (event) => {
    event.preventDefault();
    const recalledWord = event.target.wordInput.value;
    if(recalledWord.length > 0){
    setRecallWords([...recallWords, recalledWord]);
    event.target.reset();
  }else{
    alert("Please enter a value");
  }

}

  const removeWord = () => {
    const currentArr = [...recallWords];
    currentArr.pop();
    setRecallWords([...currentArr]);
  }

  return (
    <div className="recall-main">
      <h2>Number of words to guess: {currentRandomWords.length}</h2>
      <form onSubmit={enterWordFun}>
        <input type="text" className="recall-input" name="wordInput" placeholder="Enter word..." autoComplete="off" />
        <input type="submit" className="recall-btn" value="ENTER" />
      </form>
      <ol className="recall-words-list">
        { recallWords.map((word, id) => (
          <li key={id}>{ word }</li>
        )) }
      </ol>
      <button className="recall-remove-btn" onClick={removeWord}>REMOVE WORD</button>
      <Link to="/result-level" className="recall-result-btn">SEE RESULT</Link>
    </div>
  );
};
