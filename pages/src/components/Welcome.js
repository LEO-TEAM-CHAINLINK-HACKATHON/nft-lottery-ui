import { ConnectButton } from "web3uikit";
import { FaSmile } from "react-icons/fa"

function Welcome  ({ isWeb3Enabled }) {
  return (
    <div className="section">
      <div className="container">
        <h1 className="text-white text-center" id="/">
          The Raffle House
        </h1>
      </div>
      <div className="section text-center mt-2">
        {isWeb3Enabled && (
          <h3 className="text-center text-white">
            Welcome
            <span>
              {" "}
              <FaSmile />
            </span>
          </h3>
        )}
        <div className="d-flex justify-content-center">
        <ConnectButton
          className="moralis-btn"
          moralisAuth={false}
        >
          
        </ConnectButton>
        </div>
      </div>
    </div>
  );
};

export default Welcome; 