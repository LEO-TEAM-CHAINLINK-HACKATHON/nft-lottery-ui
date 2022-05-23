import Link from "next/link";
import { HiOutlineTicket } from "react-icons/hi";
import {useState} from "react";
import { useRouter } from "next/router"
function Navbar() {
    const [show, setShow] = useState(false);
    const router = useRouter();
  return (
    <nav
      className="navbar navbar-expand-md navbar-dark bg-dark fixed-top"
      id="mainNav"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#page-top">
          <span className="pe-2">
            <HiOutlineTicket
              className="fs-1 fa-rotate text-white"
              fill="#00d4ff"
            />{" "}
          </span>
          The Raffle House
        </a>
        <button
          onClick={ ()=> setShow(!show) }
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={show ? "collapse navbar-collapse show": "collapse navbar-collapse" } id="navbarResponsive">
          <ul className="navbar-nav ms-auto d-flex align-items-center">
            <Link href="/" passHref className="nav-item" >
              <a className="nav-link"  onClick={ ()=> setShow(!show) }>Home</a>
            </Link>
            <Link href="/raffles" passHref className="nav-item">
              <a className="nav-link"  onClick={ ()=> setShow(!show) }>Raffles</a>
            </Link>
            <Link className="nav-item" href="/games">
              <a className="nav-link"  onClick={ ()=> setShow(!show) }>Games</a>
            </Link>
            <Link className="nav-item" href="/how-to-play">
              <a className="nav-link"  onClick={ ()=> setShow(!show) }>How To Play</a>
            </Link>
            <Link className="nav-item" href="/#about">
              <a className="nav-link">About</a>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
