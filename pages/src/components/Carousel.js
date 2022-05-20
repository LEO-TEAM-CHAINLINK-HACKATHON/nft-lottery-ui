import Image from "next/image"
import bike from "../../public/SLV4-01-Model-Preview-1050x650.png.svg"
import art1 from "../../public/image2vector.svg"
import art2 from "../../public/image2vector (1).svg"
import art3 from "../../public/image2vector (3).svg"
import art4 from "../../public/vectordesign (4).svg"
import Carousel from "react-bootstrap/Carousel"
const myLoader = ({ src,width,quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`};
  
 const CarouselItem = () => {
    return (
    <div className="section mt-4">
    <div className="container">
  <Carousel>
  <Carousel.Item interval={1000}>
   <Image
   priority
   alt="prize"
   layout="responsive"
   className="d-block w-100"
   loader={myLoader}
   src={bike}
   height={500}
   width={750} />
  
  </Carousel.Item>
  <Carousel.Item interval={500}>
  <Image
  fill="white"
  alt="prize"
   className="d-block w-100"
   layout="responsive"
   loader={myLoader}
   src={art1}
   height={500}
   width={750} />

  </Carousel.Item>
  <Carousel.Item>
  <Image
    fill="white"

   alt="prize"
   className="d-block w-100"
   layout="responsive"
   loader={myLoader}
   src={art2}
   height={500}
   width={750} />

  </Carousel.Item>
  <Carousel.Item>
  <Image
   fill="white"
   alt="prize"
   className="d-block w-100"
   layout="responsive"
   loader={myLoader}
   src={art3}
   height={500}
   width={750} />
  
  </Carousel.Item>
  <Carousel.Item>
  <Image
   
   alt="prize"
   className="d-block w-100"
   layout="responsive"
   loader={myLoader}
   src={art4}
   height={500}
   width={750} />
  
  </Carousel.Item>
</Carousel>
        </div>
      </div>
    )
}

export default CarouselItem;