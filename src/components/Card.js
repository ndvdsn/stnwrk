import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'

const Card = ({project, index}) => {

    const [opacity, setOpacity] = useState(false)

    const cols = ["bg-green-100", "bg-slate-300", "bg-zinc-400", "bg-gray-200", "bg-green-100", "bg-green-100", "bg-green-100", "bg-green-100"]
  
    const hover = () => {
        setOpacity(true)
    }

    const unhover = () => {
        setOpacity(false)
    }

    return (
        <article className="relative shadow-lg" onMouseOver={hover} onMouseOut={unhover}>
        <NavLink to={"/projects/"+project.slug.current} >
            <div className={`flex static justify-end w-full h-96 ${opacity ? "opacity-80" : ""}`}>
                <img src={project.mainImage.asset.url} alt={project.mainImage.alt} className="object-cover w-3/4 h-96 relative"/> 
            
            </div>
            <div className={`absolute p-2 flex flex-col justify-between ${cols[index]} h-96 w-full sm:w-56 bottom-0`}>
                <h4 className="text-xl">{project.title}</h4>
                
                <div className="flex flex-wrap w-36 sm:w-56 text-sm">
                    {project.categories && project.categories.map((category, index)=> (
                        <p key={index} className={`underline mr-2 bg-white`}>{category.title}</p>
                    ))}
                </div>
            </div>
        </NavLink>
        </article>

  )
}

export default Card