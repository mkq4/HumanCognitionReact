import axios from 'axios'
import React, { useEffect } from 'react'
import GameStats from './GameStats'
import './Index.scss'
const   MainProfile = ( {email = ''} ) => {
  const [data, setData] = React.useState([])
  const [loadData, setLoadData] = React.useState(false)
  setTimeout(()=> {setLoadData(true)}, 400)
  useEffect( ()=> {
    axios.get('https://652d87fdf9afa8ef4b2794b0.mockapi.io/profile')
      .then(res => setData(res.data))
  }, [loadData])

  console.log(data);
  return (
    <main className='main'>
    <div className="container">
      <div className='main__inner'>
        <h1 className='profile-name'>Profile name</h1>
        <div className='statistics'>
          <h2 className='mb-10'>Statistics: {email}</h2>
          <div className='game-res d-flex justify-between mb-20'>
            <p>game:</p>
            <p>result:</p>
          </div>
          <div className='games-results'>
            {data.map((game,index) => {
              return(
                <GameStats key={index} GameName={game.name} Stats={game.bestResult}/>
              )
            })} 
          </div>
        </div>
      </div>
    </div>
  </main>
  )
}

export default MainProfile