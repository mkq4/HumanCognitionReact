import React, { useState, useEffect } from 'react'

const Area3 = (  ) => {
  const [maxLevel, setMaxLevel] = useState(2)
  const [level, setLevel] = useState(1)
  const [blocksCount, setBlocksCount] = useState(3) // чило блоков
  const [userBlocksCount, setUserBlocksCount] = useState(0)
  const [gameStart, setGameStart] = useState(false)
  const [time, setTime] = useState(2000)
  const blocksLength = 9



    const randomBlocks = [];

    function generateBlocksId(length) {
      const arr = [];
      while (arr.length < length) {
        const randomNum = Math.floor(Math.random() * 9) + 1;
        if (!arr.includes(randomNum)) {
          arr.push(randomNum);
        }
      }
      return arr;
    }

    const blocksId = generateBlocksId(blocksCount) // генерим массив id для блоков
    console.log(blocksId);
    // console.log(blocks[0].className);

    useEffect(()=> {
      const blocks = document.querySelectorAll('#block');
      blocks.forEach((el) => {
        blocksId.forEach((element) => {
          if(element == el.className) {
            console.log(true);
            el.classList.add('active-block')
          }
        })
      })
      const bgcBlocks = document.querySelectorAll('.active-block');
      setTimeout(()=> {
        bgcBlocks.forEach((el)=> el.classList.remove('bgc'))
      }, time)
      bgcBlocks.forEach(el => el.classList.add('bgc'))
      const activeBlocks = document.querySelectorAll('.active-block')
      console.log(activeBlocks);
      activeBlocks.forEach(el => el.addEventListener('click', () => { // клик по блоку
        el.classList.add('bgc')
        // console.log(123);
        
        setUserBlocksCount(userBlocksCount + 1) // правильно
        if(userBlocksCount === blocksCount) { // win
          activeBlocks.forEach((el)=> el.classList.remove('bgc'))
          setBlocksCount(blocksCount + 1)
          setLevel(level + 1)
        }

      }))
    }, [level])

  return (
    <div className='grid area3'>
        <div className="1" id='block'></div>
        <div className="2" id='block'></div>
        <div className="3" id='block'></div>
        <div className="4" id='block'></div>
        <div className="5" id='block'></div>
        <div className="6" id='block'></div>
        <div className="7" id='block'></div>
        <div className="8" id='block'></div>
        <div className="9" id='block'></div>
    </div>
  )
}

export default Area3