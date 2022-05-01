import Head from 'next/head'
import Image from 'next/image'
import { useMoralis } from "react-moralis";
import { About } from "./About"
import { Welcome } from './src/components/Welcome'


export default function Home() {
  const { isWeb3Enabled } = useMoralis()

  return (
    <div className="container mt-4">
      <Welcome isWeb3Enabled={isWeb3Enabled} />
      {
        isWeb3Enabled && <About />
      }
    </div>
  )
}
