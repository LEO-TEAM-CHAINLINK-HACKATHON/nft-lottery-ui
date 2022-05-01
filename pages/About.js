import Link from "next/link";
import Image from "next/image";
import Logo from "../public/vercel.svg"
import {HiOutlineTicket} from "react-icons/hi"

export const About = (params) => {
  return (
    <div className="section">
      <div className="container text-center text-white mt-4" id="/about">
        <h1>About</h1>
      </div>
      <div className="container">
        <div className="px-4 text-center text-white">
        <HiOutlineTicket className="fs-1 fa-rotate" fill="#833ab4" />
          <h1 className="display-5 fw-bold">
            Amazing Give Aways To Win At Each Draft
          </h1>
          <div className="col-lg-6 mx-auto">
            <p className=" fs-4 lead">
              Using our decentralized Waffle Lottery, you can win huge give
              aways of all kinds, crazy sports bikes, cars, NFTs and more...
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Link href="/how-to-play" passHref>
                <button
                  className="btn btn-light rounded-pill fw-bold fs-3 font-weight-4 btn-lg px-4 gap-3"
                  type="button"
                >
                  <a style={{color:"#833ab4"}}>How To Play</a>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
