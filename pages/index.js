import { useMoralis } from "react-moralis";
import  About  from "./About"


 const Home = () => {
  const { isWeb3Enabled } = useMoralis()

  return (
    <div className="container mt-4">
      {
        isWeb3Enabled && <About />
      }
    </div>
  )
}

export default Home;
