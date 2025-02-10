import React, {useState, useEffect} from 'react'
// import sanityClient from '../client'

const Carousel = ({images}) => {

  // const [images, setImages] = useState()
  const [currentImage, setCurrentImage] = useState(images[0])
  const [imageIndex, setImageIndex] = useState(0)

  const setImage = () => {
    if(imageIndex < images.length-1){
      setImageIndex(imageIndex + 1)
    }else{
      setImageIndex(0)
    }
    setCurrentImage(images[imageIndex])
  }

  useEffect(()=> {
    const interval = setInterval(()=> {
      setImage()
    }, 3000);
    return () => clearInterval(interval)
  })

  if(!currentImage) return <div className="sm:w-1/2 sm:h-1/2 items-center bg-white mx-auto"></div>
  return (
    <section className="mx-auto flex bg-white sm:w-1/2">
      <img src={currentImage ? currentImage.mainImage.asset.url : "/"} alt="" className="object-cover"/>
    </section >
  )
}

export default Carousel