import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

const Header = () => {
  return (
    <header className="bg-white">
    <div className="bg-white container mx-auto flex justify-between px-8" >
        <nav className="sm:flex ">
            <NavLink 
            to="/" 
            exact 
            activeClassName=""
            className="inline-flex items-center py-6 px-3 mr-4 text-gray-800 text-4xl font-bold title tracking-widest">
                Uist & Ross Dry Stone Walling
            </NavLink>
            {/* <small className="inline-flex items-center py-6 px-3 mr-4 text-gray-800 text-1xl font-bold tracking-widest">( Dry Stone Walling )</small> */}
            <NavLink to="/projects" className="inline-flex items-end px-3 py-2 my-6 rounded text-gray-800 hover:text-pink-500"
            activeClassName="underline">
                Projects
            </NavLink>
            <NavLink to="/about" className="inline-flex items-end px-3 py-2 my-6 rounded text-gray-800 hover:text-pink-500" 
            activeClassName="underline">
                About
            </NavLink>
           
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
            <SocialIcon url="https://www.instagram.com/terribleuist/" className="mr-4" target="_blank" fgColor="#fff" bgColor="#252626" style={{ height: 30, width: 30} }/>            
        </div>
    </div>
</header>
  )
}

export default Header