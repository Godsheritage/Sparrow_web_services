import React from 'react'
import "./account.scss"
const Account = () => {
  return (
    <div className='account'>
        <h1>What would you like to do?</h1>
        <div className='option-boxes'>
            <div>
                <p>Update Profile</p>
            </div>
            <div> 
                <p>Update Offers</p>
            </div>
            <div>
                <p>promote Event</p>
            </div>
        </div>
    </div>
  )
}

export default Account