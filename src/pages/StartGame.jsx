import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/StartGame.css";
import { MyContext } from '../contexts/MyContext';

export const StartGame = () => {

  const context = useContext(MyContext);

  const { setCurrentLevel } = context;

  const [ levelInput, setLevelInput ] = useState(1);

  const navigate = useNavigate();

  const startGameFun = () => {
    setCurrentLevel(levelInput);
    navigate("/remember-level");
  }

  const handleInput = (event) => {
    setLevelInput(Number(event.target.value));
  }

  return (
    <div className='startGame-main'>

      <input type="text" className='startgame-input' value={levelInput} onChange={handleInput} placeholder='Enter level you want to start' />

      
      <button onClick={startGameFun}>START GAME</button>
      </div>
  )
}
