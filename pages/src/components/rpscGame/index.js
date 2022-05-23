import {FaHandPaper, FaHandRock, FaHandScissors} from "react-icons/fa"
import { useState } from "react";
const RpscGame = () => {

    const [choice, setChoice] = useState(false)
    return (
        <div className="section">
            <div className="container">
                <h3 className="text-white  display-5 fw-normal text-center m-4">Rock Papaz Scizzle</h3>
            </div>
            <div className="container" style={{backgroundColor:'#1F1C5C'}}>

            <div className="container d-flex justify-content-center">
                <div className={choice ? "left-50 top-0" : "  left-0 top-0 position-absolute"}>
                    <h3 className="text-white p-3 position-relative">Laptop choice</h3>
                </div>
                <div className={choice ? "left-50 top-0" : "  left-0 top-0 position-absolute"}>
                    <h3 className="text-white p-3">Player choice</h3>
                </div>
            </div>
                <div className="container">
                <div className="col-lg-6 m-auto">
                    <div className="container d-flex justify-content-center">
                        <span 
                        onClick={() => setChoice(!choice)}
                        type="button" className="display-2 p-3 text-white">
                        <FaHandRock height={100} width={125} />
                        </span>
                        <span
                        onClick={() => setChoice(!choice)}
                        type="button"
                        className="display-2 p-3 text-white">
                        <FaHandPaper height={100} width={125} />
                        </span>
                        <span 
                        onClick={() => setChoice(!choice)}
                        type="button"
                        className="display-2 p-3 text-white">
                        <FaHandScissors height={100} width={125} />
                        </span>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default RpscGame;