import React from 'react'
import './Index.scss'
const GameStats = ( {GameName, Stats} ) => {
  return (
    <div className='game-stats d-flex justify-between'>
        <p className='game'> {GameName} </p>
        <p className='result'> {Stats} </p>
    </div>
  )
}

export default GameStats