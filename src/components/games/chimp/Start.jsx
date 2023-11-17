import React from 'react'

const Start = () => {
  return (
    <div className='start-menu d-flex flex-column justify-center align-center h100p cu-p'>
        <img className='logo' src="../../../../images/svg/chimp.svg" alt="monk"></img>
        <p>Are You Smarter Than a Chimpanzee?</p>
        <div className="content3 mb-50 mt-30">
            <p>Click the squares in order according to their numbers.</p>
            <p>The test will get progressively harder.</p>
        </div>
    </div>
  )
}

export default Start