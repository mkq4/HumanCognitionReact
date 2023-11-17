import React from 'react'
import GameWindow from './GameWindow'
import GameDescription from '../GameDescription'
const MainTyping = () => {
  return (
    <>
      <GameWindow/>
      <GameDescription title={'Typing Test'} text={
        <p>
          This is a simple test of typing speed, measuring words per minute, or WPM.

          The standard measure of WPM is (number of characters / 5) / (time taken). By that measurement, quick brown fox is 15 characters, including spaces.

          The recorded score is WPM * Accuracy.
          </p>
      }/>
    </>
  )
}

export default MainTyping