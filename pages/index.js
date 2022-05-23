import About from "./About";
import CarouselItem from "./src/components/Carousel";

const Home = () => {

  return (
    <div className="container mt-4">
      <CarouselItem />
      <About />
    </div>
  );
};

export default Home;
