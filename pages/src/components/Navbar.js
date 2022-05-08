import Link from "next/link";
import { HiOutlineTicket } from "react-icons/hi";

function Navbar() {
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
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <Link href="/" passHref className="nav-item">
              <a className="nav-link">Home</a>
            </Link>
            <Link href="/waffles" passHref className="nav-item">
              <a className="nav-link">Raffles</a>
            </Link>
            <Link className="nav-item" href="/games">
              <a className="nav-link">Games</a>
            </Link>
            <Link className="nav-item" href="/how-to-play">
              <a className="nav-link">How To Play</a>
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
