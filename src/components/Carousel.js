import React, {useState, useEffect} from 'react'
import sanityClient from '../client'

const Carousel = () => {

  const [images, setImages] = useState()

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

  console.log(images && images)
  if(!images) return <div>Loading</div>
  return (
    <div>Carousel</div>
  )
}

export default Carousel