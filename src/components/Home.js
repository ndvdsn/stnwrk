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
    <main className="max-h-screen sm:p-12">
      <section className="container sm:flex sm:px-12 sm:py-6 bg-slate-100">
        <Carousel images={images}/>
        <div className="bg-white sm:w-1/2 sm:h-96">
          <ul className="p-4 ml-4 sm:p-12 sm:text-2xl list-disc leading-10">
            <li>
              Dry Stone Walling - New Build and Repairs
            </li>
            <li>
              Stone and Mortar Construction
            </li>
            <li>
              North Uist, Benbecula and Wester Ross
            </li>
          </ul>

          <div className="flex justify-center">
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
