import React, {useState, useEffect } from 'react'
import Card from './Card'

import sanityClient from '../client'

const Projects = () => {

  const [projects, setProjects] = useState()

  useEffect(()=> {
      sanityClient
      .fetch(`*[_type == "project"]{
          title,
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
      .then((data)=> setProjects(data))
      .catch(error => console.error)
  },[])

  console.log(projects)
  return (
    <main className="min-h-screen">
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-12 p-12">
        {projects && projects.map((project, index)=> (

            <Card key={index} project={project} index={index}/>
        ))}
    </section>
</main>
  )
}

export default Projects