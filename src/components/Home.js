import React, {useState, useEffect} from 'react'
import Carousel from './Carousel'
import { NavLink } from 'react-router-dom'
import sanityClient from '../client'
import Footer from './Footer'

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
    <main className="font-serif">
      <section className="">
        {/* <Carousel images={images}/> */}

        <div className="flex">

          <div className="w-1/2 border-r border-t border-b border-slate-800 ">
            <img src={images[0].mainImage.asset.url} alt="" />
          </div>
     
          <div className="w-1/2 border-l border-t border-b border-slate-800 p-16">
            {/* <h2 className="text-3xl p-4 text-center font-serif">Uist & Ross Dry Stone Walling </h2> */}
            <p className="px-8 mx-auto py-4 text-xl">Repair and new build of dry stone structures. Based between North Uist and the Gairloch area in Wester Ross.</p>
            <p className="px-8 mx-auto py-4 text-3xl"><b className="text-bold">Contact </b> Neil Davidson on:</p>
            <ul className="px-8 mx-auto py-4 text-2xl">
              <li><b>T: </b> 07989165529</li>
              <li><b>E: </b> neil.j.davidson@gmail.com</li>
            </ul>
          </div>

        </div>

        <div className="flex">



          <div className="px-12 w-1/2 border-r border-t border-b border-slate-800 ">
              <NavLink to="/projects">
              <button className="rounded px-4 py-2 bg-pink-500">
              <h2>Past Projects</h2>
              </button>
              </NavLink>
            
          </div>

          <div className="w-1/2 border-l border-t border-b border-slate-800">
            <img src={images[1].mainImage.asset.url} alt="" />
          </div>

        </div>

        <div className="flex">
          <div className="w-1/2 border-r border-t border-b border-slate-800">
            <img src={images[2].mainImage.asset.url} alt="" />
          </div>
          <div className="w-1/2 border-l border-t border-b border-slate-800">
            <img src={images[3].mainImage.asset.url} alt="" />
          </div>

        </div>

        <div className="flex">
          <div className="w-1/2 border-r border-t border-b border-slate-800">
            <img src={images[4].mainImage.asset.url} alt="" />
          </div>
          <div className="w-1/2 border-l border-t border-b border-slate-800">
            <img src={images[5].mainImage.asset.url} alt="" />
          </div>

        </div>

      </section>
      <Footer />
    </main>
  )
}

export default Home
