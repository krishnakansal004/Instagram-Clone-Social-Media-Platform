import React from 'react'
import "../nav.scss"
import { useNavigate } from 'react-router'
const Nav = () => {
  const navigate = useNavigate()

  return (
    <nav className="nav-bar">
        <div className="nav-content">

        <p>Insta</p>
        <button
        onClick={()=>{navigate("/create-post")}}
        className='button primary-button'>New Post</button>
        </div>
    </nav>
  )
}

export default Nav
