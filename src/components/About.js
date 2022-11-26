import React, {useState, useEffect } from 'react'
import sanityClient from '../client'

const About = () => {

  const [about, setAbout] = useState(null)

  useEffect(()=> {
    sanityClient
    .fetch(`*[_type == "about"]{
        title,
        description,
        mainImage{
          asset->{
              _id,
              url
          },
        },
    }`)
    .then((data)=> setAbout(data[0]))
    .catch(error => console.error)
},[])

if(!about) return <div className="container mx-auto text-center">Loading...</div>
  return (
    <main className=" min-h-screen sm:p-12">
          <header className="container mx-auto bg-white grid grid-cols-1 sm:grid-cols-2 p-12 bg-green-100">
            <div className="bg-white shadow-lg">
            <h2 className="text-xl p-4 font-bold">About</h2>
            
            <div className="flex flex-wrap p-4">
            <p>{about && about.title}</p>
            <p>{about && about.description}</p>
            </div>
         
            </div>
            <div className="shadow-lg">
                <img src={about.mainImage.asset.url} alt={about.title} />
            </div>
        </header>
      </main>
  )
}

export default About