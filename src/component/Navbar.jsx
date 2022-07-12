import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-gray-300 h-10 flex items-center justify-center' >
      <Link to='/' className="font-medium text-indigo-600 hover:text-indigo-500 m-4 "> Home</Link>
      <Link to='register' className="font-medium text-indigo-600 hover:text-indigo-500 m-4">Sign Up</Link>
      <Link to='/chat' className="font-medium text-indigo-600 hover:text-indigo-500 m-4">Chat</Link>


    </nav>
  )
}

export default Navbar