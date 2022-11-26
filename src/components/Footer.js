import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white">
    <div className="bg-white container mx-auto flex justify-between px-8" >
        <nav className="flex">
            {/* <small className="inline-flex items-center py-6 px-3 mr-4 text-gray-800 text-1xl font-bold tracking-widest">( Dry Stone Walling )</small> */}
          
            <NavLink to="/about" className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-800 hover:text-pink-500" 
            activeClassName="underline">
                About
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