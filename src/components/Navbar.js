import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   
      <nav>
        <Link to="/" >Logo</Link>
        <ul>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/login"><button>Login</button></Link>
            </li>
        </ul>
      </nav>
   
  )
}

export default Navbar
