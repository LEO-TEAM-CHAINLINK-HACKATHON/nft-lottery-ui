import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";
import Footer from "../../Footer";
import { useMoralis } from "react-moralis";
import Welcome from "./Welcome";

const Layout = ({children}) => {
  
  const { isWeb3Enabled } = useMoralis();

    return (
        <React.StrictMode>
        <Head>
        <title>The Raffle House</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="container">
         <header>
           <Navbar />
         </header>
         {
          isWeb3Enabled ?
        <main className="main">
        <Welcome isWeb3Enabled={isWeb3Enabled} />
        {children}
        </main>
        :
        <main className="main">
        <Welcome isWeb3Enabled={isWeb3Enabled} />
        </main>
         }
        </div>
      <footer>
        <Footer />
      </footer>
        </React.StrictMode>
    )
}

export default Layout;