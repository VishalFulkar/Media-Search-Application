import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className=" fixed top-0 left-0 w-full z-50 py-5 px-5 flex items-center justify-between bg-[#050505]/60 backdrop-blur-md border-b border-white/5 ">
        <h1 className="text-xl font-bold">Media Search</h1>
        <div>
            <Link className="text-medium px-4 py-2 rounded font-semibold" to='/' >Search</Link>
            <Link className="text-medium px-4 py-2 rounded font-semibold" to='/collection' >Collection</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
