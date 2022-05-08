import About from "./About";
import CarouselItem from "./src/components/Carousel";
import { useMoralis } from "react-moralis";
import Welcome from "./src/components/Welcome";

const Home = () => {
  const { isWeb3Enabled } = useMoralis();

  return (
    <div className="container mt-4">
      <Welcome isWeb3Enabled={isWeb3Enabled} />
      <CarouselItem />
      <About />
    </div>
  );
};

export default Home;
