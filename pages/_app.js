import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "web3uikit";
import  Layout  from "./Layout"
import "../styles/globals.scss";
import "../styles/custom.scss";
function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider initializeOnMount={false}>
      <NotificationProvider>
        <Layout>
        <Component {...pageProps} />
        </Layout>
      </NotificationProvider>
    </MoralisProvider>
  );
}

export default MyApp;
