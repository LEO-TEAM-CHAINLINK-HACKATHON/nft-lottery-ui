import Image from "next/image";
import moto from "./public/SLV4-01-Model-Preview-1050x650.png.svg";

const myLoader = ({ src }) => {
    return `${src}`;
  };
 const Waffles = () => {
    return (
        <div className="section waffle">
            <div className="container">
            <h1 className="text-center text-white">Raffles</h1>
            </div>
            <div className="container bg-light">
                <div className="row p-4">
                    <div className="col-lg-6 bg-dark">
                        <div className="container-fluid">

                        <Image 
                        src={moto} 
                        alt="prize" 
                        height={1000} 
                        layout="responsive" 
                        width={1200} 
                        loader={myLoader} 
                        />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <h4>Featured Raffle</h4>
                        <h1>Ducati SuperLeggera</h1>
                        <p>
                            Superleggera (Italian for Superlight) is a custom tube and alloy panel automobile coachwork construction technology developed by Felice Bianchi Anderloni of Italian coachbuilder Carrozzeria Touring Superleggera. A separate chassis was still required.
                        </p>
                        <div className="container d-flex justify-content-between flex-start">
                            <span className="badge badge-pill fs-5 badge-success text-dark">Tickets: 300
                            </span>
                            <span className="badge badge-pill fs-5 badge-success text-dark">Price:tbc
                            </span>
                            <span className="badge badge-pill fs-5 bg-success badge-success text-dark">RafNFT price: 50%
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Waffles