import React from 'react'
import Login from './Login'
import Register from './Register'


function Form() {
  return (
    <div className='d-flex justify-content-between'>
      <div className='formWrapper'><Login /></div>
      <div className='formWrapper'><Register /></div>
    </div>
  )
}

export default Form