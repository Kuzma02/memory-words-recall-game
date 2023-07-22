import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../contexts/MyContext';
import "../styles/RememberLevel.css";
import { Link, useNavigate } from 'react-router-dom';
import CountdownTimer from '../components/CountdownTimer';

export const RememberLevel = () => {


  const context = useContext(MyContext);
  
  const navigate = useNavigate();


  const wordsList = context.wordsList;
  const currentRandomWords = context.currentRandomWords;
  const setCurrentRandomWords = context.setCurrentRandomWords;
  const currentLevel = context.currentLevel;

  const [ initialTime, setInitalTime ] = useState(30 + (currentLevel * 10));





  useEffect(() => {
    const currentArr = [];
    const numberOfRandomWords = Math.round(currentLevel * 1.5);
    console.log(numberOfRandomWords);
    for(let i = 0; i < numberOfRandomWords; i++){
      let randomWord = wordsList[Math.round(Math.random()*(wordsList.length - 1))];
      currentArr.push(randomWord); 
    }
    setCurrentRandomWords(currentArr);
  }, [currentLevel])


  const goToRecallLevel = () => {
    navigate("/recall-level");
  }

  return (
    <div className='remember-main'>
      <CountdownTimer goToRecallLevel={goToRecallLevel} initialTime={initialTime} />
      <h1 className='remember-main-title'>Remember these words: </h1>
      <ol className='randomList'>
        {currentRandomWords.map((randomWord, key) => (
          <li key={key}>{randomWord}</li>
        ))}
      </ol>
      <button className="btn-action" onClick={goToRecallLevel}>RECALL NOW</button>
    </div>
  )
}
