import { ConnectButton } from "web3uikit";
import { FaSmile } from "react-icons/fa"

function Welcome  ({ isWeb3Enabled }) {
  return (
    <div className="section positon-relative m-3">
      <div className="container">
        <h1 className="text-white text-center m-4" id="/">
          The Raffle House
        </h1>
      </div>
      <div className="section  text-center m-auto position-absolute top-25 start-50 translate-middle">
        {isWeb3Enabled && (
          <h3 className="text-white m-5">
            Welcome
            <span>
              {" "}
              <FaSmile />
            </span>
          </h3>
        )}
      
      </div>
        <div
        className="mt-5 d-flex justify-content-center"
        >
        <ConnectButton
          moralisAuth={false}
        />
         </div>
    </div>
  );
};

export default Welcome; 