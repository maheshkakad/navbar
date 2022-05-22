import React from 'react'

const Navbar = () => {
  return (
      <>
      <div className='navbar'>       
 
    <a className="navbar-brand" href="#" style={{color:"white"}}>LOGOBAKERY</a>
   
   
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#" style={{color:"white"}}>Services</a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link" href="#" tabindex="-1" aria-disabled="true" style={{color:"white"}}>Project</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" tabindex="-1" aria-disabled="true" style={{color:"white"}}>About</a>
        </li>
      </ul>
      
      <li className="nav-item1">
          <a className="navbar-brand" aria-current="page" href="#" style={{width:"50px",color:"white",backgroundColor:"teal",borderRadius:"40px",width:"30px"}}>Contact</a>
        </li>
      
    </div>
 

         
      
    </>   
    
   

  )
}

export default Navbar