import { useMoralis } from "react-moralis";
import  About  from "./About"
import CarouselItem  from "./src/components/Carousel";


 const Home = () => {
  const { isWeb3Enabled } = useMoralis()

  return (
    <div className="container mt-4">
    <CarouselItem />
    <About />
    
    </div>
  )
}

export default Home;
