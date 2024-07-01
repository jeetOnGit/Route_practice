import React from 'react'
import '../App.css'

function Register() {
  return (
    <div className='formBox'>
      <h5 className='fs-3'>Register</h5>
      <div className="userName d-flex flex-column">
        <label>Email address<span>*</span></label>
        <input type="text" className='fs-5 py-2'/>
        <p>A link to set a new password will be sent to your email address.</p>
      </div>

      <button className='button py-2 px-3'>Register</button>




    </div>
  )
}

export default Register