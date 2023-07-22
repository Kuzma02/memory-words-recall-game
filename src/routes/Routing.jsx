import React from 'react'
import { RecallLevel, RememberLevel, ResultLevel, StartGame } from '../pages';
import { Route, Routes } from 'react-router-dom';

export const Routing = () => {
  return (
    <>
      <Routes>
          <Route path="/" exact element={<StartGame />} />
          <Route path="/remember-level" element={<RememberLevel />} />
          <Route path="/result-level" element={<ResultLevel />} />
          <Route path="/recall-level" element={<RecallLevel />} />
      </Routes>
    </>
  )
}
