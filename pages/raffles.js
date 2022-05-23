
import FeatBanner from "./src/components/raffle/FeatBanner"
import RaffleItem from "./src/components/raffle/RaffleItem"


 const Waffles = () => {
    return (
        <div className="section waffle">
            <div className="container">
            <h1 className="text-center text-white m-3">Raffles</h1>
            </div>
           <FeatBanner />
           <RaffleItem />
        </div>
    )
}

export default Waffles