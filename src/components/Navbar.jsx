import React from 'react'
import { Link ,NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       
  <div className="left-panel">
  <div className='links'>
 <NavLink exact="true" to="/" activeclassname="active" style={{ textDecoration: 'none' }}>
    Home
  </NavLink>
  <NavLink to="/guide" activeclassname="active" style={{ textDecoration: 'none' }}>
    Guide
  </NavLink>
  <NavLink to="/information" activeclassname="active" style={{ textDecoration: 'none' }}>
    Information
  </NavLink>
  <NavLink to="/contact" activeclassname="active" style={{ textDecoration: 'none' }}>
    Contact
  </NavLink>
       </div>
      </div>
      
    </div>
  )
}

export default Navbar

