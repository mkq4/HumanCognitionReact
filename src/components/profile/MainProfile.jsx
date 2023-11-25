import axios from 'axios'
import React, { useEffect } from 'react'
import GameStats from './GameStats'
import './Index.scss'
import { Link } from 'react-router-dom'

const   MainProfile = () => {
  const [data, setData] = React.useState([])
  const [loadData, setLoadData] = React.useState(false)
  const [email, setEmail] = React.useState('')
  // const [haveEmail, setHaveEmail] = React.useState(false)

  setTimeout(()=> {setLoadData(true)}, 400)
  useEffect( ()=> {
    axios.get(import.meta.env.VITE_PROFILE)
      .then(res => setData(res.data))

    if(localStorage.getItem(email) != '') {
      setEmail(localStorage.getItem('email'))
    } else {
      setEmail( Reg )
    }
  }, [loadData])

  const logOut = () => {
    localStorage.clear('email')
  }

  const Reg = () => {
    return <Link to= '/registration'/>
  }

  console.log(data);
  return (
    <main className='main'>
    <div className="container">
      <div className='main__inner'>
        <div className="d-flex justify-between">
          <h1 className='profile-name'>Profile name: {email}</h1>
          <p className='logout mt-20' onClick={() => {
            logOut()
            window.location.reload()
          }}>Log out</p>
        </div>
        <div className='statistics'>
          <h2 className='mb-10'>Statistics:</h2>
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