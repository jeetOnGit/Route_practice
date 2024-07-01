import React from 'react'
import { NavLink } from 'react-router-dom'
import './TopHeader.css'
import '../App.css'
function TopHeader() {
  let menuItems =[
    {name:"Login / Register",
      icon: <i class="fa-regular fa-circle-user green" />,
      path:"/login"
    },
    {name:"FAQ",
      icon: <i class="fa-regular fa-circle-question green" />,
      path:"/faq"
    },
    {name:"Order tracking",
      icon: <i class="fa-regular fa-clock green" />,
      path:"/orders"
    }
  ]
  return (
    <div className='topHeader'>
      <div className='container-w mx-auto d-flex justify-content-between align-items-center'>
        <div>
          <h6 className='m-0'><i class="fa-solid fa-headset green" /> Hotline : <span className='green'>+01 023 345 678</span></h6>
        </div>
          <div>
            <ul className='d-flex m-0 align-items-center justify-content-between menus'>
            {menuItems.map((item) => (
              <NavLink to={item.path} className="text-decoration-none primaryColor menuItem">{item.icon} {item.name}</NavLink>
            ))}
            </ul>
          </div>
        

      </div>
    </div>
    
  )
}

export default TopHeader