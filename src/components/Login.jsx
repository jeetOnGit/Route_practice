import React from 'react'
import '../App.css'

function Login() {
  return (
    <div className='formBox'>
      <h5 className='fs-3'>Login</h5>
      <div className="userName d-flex flex-column gap-2 mb-3">
        <label>Username or email address<span>*</span></label>
        <input className='py-1' type="text" />
      </div>

      <div className="Password d-flex flex-column gap-2">
        <label>Password<span>*</span></label>
        <input className='py-1' type="password" />
      </div>
      <button className='my-3 py-2 px-3 button'>Log in</button>


      <div className="remember">
        <input type="checkbox" className='me-1' />
        <label>Remember me</label>
      </div>

      



    </div>
    
  )
}

export default Login