import React, {useState, useEffect } from 'react'
import Card from './Card'

import sanityClient from '../client'

const Projects = () => {

  const [projects, setProjects] = useState()

  useEffect(()=> {
      sanityClient
      .fetch(`*[_type == "project"]{
          title,
          order,
          subtitle,
          location,
          slug,
          mainImage{
              asset->{
                  _id,
                  url
              },
              alt
          },
          client,
          "categories": categories[]->{
              title
          }

      }`)
      .then((data)=> setProjects(data.sort((a, b) => a.order < b.order ? 1: -1)))
      .catch(error => console.error)
  },[])

  if(!projects) return <div className="container mx-auto text-center">Loading...</div>
  return (
    <main className="min-h-screen">
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-16 p-4 sm:p-16">
        {projects && projects.map((project, index)=> (

            <Card key={index} project={project} index={index}/>
        ))}
    </section>
</main>
  )
}

export default Projects