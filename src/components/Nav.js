import React from "react"
import { Link } from "react-router-dom"

const Nav = ()=> {
  return(
    <nav className="bg-emerald-600 flex items-center px-5 text-white text-2xl py-5 justify-end gap-5">
      <Link className="flex items-center gap-2">
        <h1>Book</h1>
      </Link>
      <Link className="flex items-center gap-2">
        <h1>Deals</h1>
      </Link>
      <Link className="flex items-center gap-2">
        <h1>Info</h1>
      </Link>
      <Link className="flex items-center gap-2">
        <h1>About Us</h1>
      </Link>
    </nav>
  )
}

export default Nav