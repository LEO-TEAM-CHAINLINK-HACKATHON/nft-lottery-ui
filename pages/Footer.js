import Image from "next/image"
import logo from "./public/vercel.svg"
const myLoader = ({ src }) => {
  return `${src}`;
};

function Footer  ()  {
    return (
        <div className="footer text-mute w-100 mt-3">
          <div className="container text-center">
            <div className="row">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="list-unstyled text-white"
        >
          Powered by{''}
          <span className="logo">
            <Image 
            src={logo} 
            alt="Vercel Logo" 
            width={72} height={16} 
            loader={myLoader} 
            />
          </span>
        </a>
            </div>
          </div>
      </div>

    )
    
}

export default Footer;