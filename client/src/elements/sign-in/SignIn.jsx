import React from 'react'
import "./signin.scss"

const SignIn = () => {
  return (
    <div className='sign-in-box'>
        <h1>Sign In</h1>
        <input type="text" value="" placeholder='username' />
        <input type="password" value="" placeholder='password' />
        <button>Sign In</button>
    </div>
  )
}

export default SignIn