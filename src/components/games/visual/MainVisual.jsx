import React from 'react'
import GameWindow from './GameWindow'
import GameDescription from '../GameDescription'
const MainVisual = () => {
  return (
    <>
        <GameWindow/>
        <GameDescription title={'Visual Memory'} text={
            <div> 
                <p>About the test</p> <br/>
                <p>Every level, a number of tiles will flash white. Memorize them, and pick them again after the tiles are reset!</p>
                <br/><p>Levels get progressively more difficult, to challenge your skills.</p>
                <p>Make it as far as you can!</p>
            </div>
        }/>
    </>
  )
}

export default MainVisual