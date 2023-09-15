import React, {useState, useEffect} from 'react'
import Carousel from './Carousel'
import { NavLink } from 'react-router-dom'
import sanityClient from '../client'

const Home = () => {

  useEffect(()=> {
    sanityClient
    .fetch(
      `*[_type == "photo" && carousel == true]{
          title,
          mainImage{
            asset->{
                _id,
                url
            },
        },
          
      }`
    )
    .then((data) => setImages(data))
    .catch(console.error)
  },[])

  const [images, setImages] = useState()
  if(!images) return <div>Loading...</div>
  return (
    <main className=" sm:p-12">
      <section className="container h-3/4 sm:flex sm:px-6 sm:py-3 ">
        <Carousel images={images}/>

        <div className="bg-white sm:w-1/2   bg-slate-100">
          {/* <ul className="p-4 ml-4 sm:p-12 sm:text-2xl list-disc leading-10">
            <li>
              Dry Stone Walling - New Build and Repairs
            </li>
            <li>
              Stone and Mortar Construction
            </li>
            <li>
              North Uist, Benbecula and Wester Ross
            </li>
          </ul> */}
          <div className="bg-white py-12 px-12  bg-slate-100">
            <h2 className="text-4xl p-4">Uist & Ross Dry Stone Walling </h2>
            <p className="px-4 py-4 text-xl">We specialise in the repair and new build of dry stone structures. We are based between North Uist and the Gairloch area in Wester Ross. See the projects page for documentation of past work.</p>
            <p className="px-4 py-4 text-xl"><b className="text-bold">Contact </b> Neil Davidson on:</p>
            <ul className="px-4 py-4 text-xl">
              <li><b>T: </b> 07989165529</li>
              <li><b>E: </b> neil.j.davidson@gmail.com</li>
            </ul>
          </div>

          <div className="flex justify-around px-12">
            <NavLink to="/projects">
            <button className="rounded px-4 py-2 bg-pink-500">
            <h2>Past Projects</h2>
            </button>
            </NavLink>

        
            
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
