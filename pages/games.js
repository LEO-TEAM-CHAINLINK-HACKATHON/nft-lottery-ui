import Image from "next/image"
import { aS, deckBack } from "./src/helpers/cards"

const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  };
const Games = (second) => {
    return (
        <div className="section">
            <div className="container">
                <h1 className="text-white m-4">Games</h1>
            </div>
            <div className="section">
                <div className="container">
                <Image src={deckBack} alt="card" height={320} width={220} layout="fixed" loader={myLoader}/>
                </div>
                <div className="container">
                <Image src={aS} alt="card" height={320} width={220} layout="fixed"loader={myLoader} />
                </div>
            </div>
        </div>
    )
}

export default Games