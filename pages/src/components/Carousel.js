import Image from "next/image"
import bike from "../../public/SLV4-01-Model-Preview-1050x650.png.svg"
import Carousel from "react-bootstrap/Carousel"

const myLoader = ({ src }) => {
    return `${src}`;
  };
export const CarouselItem = () => {
    return (
    <div className="section mt-4">
    <div className="container">
  <Carousel>
  <Carousel.Item interval={1000}>
   <Image
   alt="prize"
   layout="responsive"
   className="d-block w-100"
   loader={myLoader}
   src={bike}
   height={500}
   width={750} />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
  <Image
  alt="prize"
   className="d-block w-100"
   layout="responsive"
   loader={myLoader}
   src={bike}
   height={500}
   width={750} />
    <Carousel.Caption>
      <h3 className="opactity-2">Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Image
   alt="prize"
   className="d-block w-100"
   layout="responsive"
   loader={myLoader}
   src={bike}
   height={500}
   width={750} />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
      </div>
    )
}