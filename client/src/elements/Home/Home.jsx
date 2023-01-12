import React from 'react'
import SignIn from '../sign-in/SignIn'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <div className='sub-home'>
      <SignIn/> 
      </div>
    </div>
  )
}

export default Home