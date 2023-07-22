import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/StartGame.css";

export const StartGame = () => {

  const navigate = useNavigate();

  const startGameFun = () => {
    navigate("/remember-level");
  }

  return (
    <div className='startGame-main'>
      <button onClick={startGameFun}>START GAME</button>
      </div>
  )
}
