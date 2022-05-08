import Image from "next/image";
import art1 from "../../../public/vectordesign (4).svg"
import art2 from "../../../public/vectordesign (3).svg"

const myLoader = ({ src }) => {
    return `${src}`;
  };

const RaffleItem = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="text-center text-white mt-4">
                    <h1>Upcoming Raffle</h1>
                </div>
                <div className="row mt-4">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card bg-transparent rounded-3 border-white mb-4">
                            <Image 
                            height={30}
                            width={30}
                            alt="item"
                            src={art1} 
                            layout="responsive"
                            loader={myLoader}
                            />
                            <div className="card-body text-white text-center">
                                <h5>Art Name</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card bg-transparent rounded-3 border-white">
                            <Image 
                            height={30}
                            width={30}
                            alt="item"
                            src={art2} 
                            layout="responsive"
                            loader={myLoader}
                            />
                            <div className="card-body text-white text-center">
                                <h5>Art Name</h5>
                            </div>
                        </div>
                    </div>
                </div>
               

            </div>
        </div>
    )
}

export default RaffleItem;
