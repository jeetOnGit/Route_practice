import React from 'react'
import { Route, Routes } from 'react-router-dom';

import { Link } from 'react-router-dom'
import AnotherPage from './AnotherPage'



function OrderHistory() {
  return (
    <div className='container-w mx-auto mt-5 fs-1'>OrderHistory
        <Routes>
          <Route path="/AnotherPage" element={ <AnotherPage /> } />
        </Routes>
        <Link to='/AnotherPage'>Go to another page</Link>
    </div>

  )
}

export default OrderHistory