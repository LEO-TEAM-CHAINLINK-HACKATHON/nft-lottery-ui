import CardGame from "./src/components/cardGame";
import RpscGame from "./src/components/rpscGame";
const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const Games = () => {
  return (
    <div className="section">
      <div className="container">
        <h1 className="text-white  display-2 fw-bold text-center m-4">Games</h1>
      </div>
      <CardGame myLoader={myLoader} />
      <RpscGame />
    </div>
  );
};

export default Games;
