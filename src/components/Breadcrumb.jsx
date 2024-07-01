import React from 'react'
import { useLocation, Link } from 'react-router-dom';
import '../App.css'


function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);
  let breadcrumbPath = '';

  
  return (
    <div className='container-w mx-auto'>
      <Link to='/'>Home</Link>
      {
        pathnames.map((name, index) => {
          breadcrumbPath += `${name}`
          const isLast = index === pathnames.length-1;


          return isLast?(
            <span key={breadcrumbPath}>{'>'} {name}</span>
          ) : (
            <span key={breadcrumbPath}><Link to={breadcrumbPath}>{name}</Link></span>
          )
        }) 
      }
    </div>
  )
}

export default Breadcrumb