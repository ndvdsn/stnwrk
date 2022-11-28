import React, {useState, useEffect } from 'react'
import sanityClient from '../client'
import { useParams } from 'react-router-dom'
// import BlockContent from "@sanity/block-content-to-react";


const Project = () => {

    const { slug } = useParams();
    const [project, setProject] = useState(null)

    useEffect(()=> {
        sanityClient
        .fetch(`*[_type == "project" && slug.current == "${slug}"]{
            title,
            subtitle, 
            location,
            summary,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            },
            contextImage{
                asset->{
                    _id,
                    url
                },
                alt
            },
            "categories": categories[]->{
                title
            },
            "photos": photos[]->{
              mainImage{
                asset->{
                    _id,
                    url
                }
              },
              title,
              alt
          },
            
           
            

        }`)
        .then((data)=> setProject(data[0]))
        .catch(console.error)
    },[slug])

    if(!project) return <div className="container mx-auto text-center">Loading...</div>
  return (
    <main className=" min-h-screen sm:p-12">
        <header className="container mx-auto grid grid-cols-1 sm:grid-cols-2 p-2 sm:p-12 bg-green-100">
            <div className="bg-white shadow-lg">
            <h2 className="text-xl p-4">{project.title}</h2>
            <p className="p-4 text-sm">Location: {project.location}</p>
            <div className="flex flex-wrap p-4">
            <p>{project.summary}</p>
              <p><br></br>{project.categories && project.categories.map((category, index)=> (<b key={index} className="mr-2 text-sm">{category.title}</b>))}
              </p>
              
            </div>
         
            </div>
            <div className="shadow-lg">
                <img src={project.mainImage.asset.url} alt={project.mainImage.alt} />
            </div>
        </header>

        <section className="container mx-auto bg-white">

            {/* <div className="px-4">
                <BlockContent blocks={project.body} projectId="fvwk0498" dataset="production"/>
            </div> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 p-2 sm:p-12 bg-green-100">
              {project.photos && project.photos.map((photo, index)=> (
                <div key={index} className="shadow-lg bg-white">
                  <img src={photo.mainImage.asset.url} alt={photo.alt} />
                  <small className="pl-2">{photo.title}</small>
                </div>
              ))}
            </div>
            
           
        </section>
    </main>
  )
}

export default Project