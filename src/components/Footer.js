import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <footer className="bg-white">
    <div className="bg-white container mx-auto flex justify-between px-8" >
        <nav className="flex">
          
            <NavLink to="/" className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-800 hover:text-pink-500" 
            activeClassName="underline">
                Home
            </NavLink>
           
        </nav>
        <div>
          Copyright 2022
        </div>
        <div className="inline-flex py-3 px-3 my-6">
            <SocialIcon url="https://www.instagram.com/terribleuist/" className="mr-4" target="_blank" fgColor="#fff" bgColor="#252626" style={{ height: 30, width: 30} }/>            
        </div>
    </div>
</footer>
  )
}

export default Footer