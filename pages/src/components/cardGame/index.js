import Image from "next/image"
import cardDeck from "../../../../helpers/cardDeck"
import  deckBack  from "../../../public/images/cards/deckBack.svg"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";


let gameDeck = new cardDeck()

gameDeck.shuffle()
const CardGame = ({myLoader}) => {
    const router = useRouter()
    const [card, setcard] = useState("")
    const [playerCard, setplayerCard] = useState("")
    const [show, setShow] = useState(false)
    
    useEffect(() => {
        
        setcard(gameDeck.cards[0].deck.src)
        setplayerCard(gameDeck.cards[1].deck.src)
        console.log(card,playerCard); 
         
        return () => {
            setcard(gameDeck.cards[0].deck.src)
            setplayerCard(gameDeck.cards[1].deck.src)
            setShow(false)
      

  }
   
  }, [card, playerCard])
  
    return (
        <div className="section">
        <div className="container">
            <h3 className="text-white  display-5 fw-normal text-center m-4">High Card Win</h3>
        </div>
        <div className="container">
            <div className="section">
                  <div className="section text-center p-3">
            <button className="btn fs-3 text-secondary btn-xl btn-light" onClick={() => setShow(!show)}>Try your luck</button>
        </div>
        <div className="section text-center p-3">
            <button className="btn fs-3 text-secondary btn-xl btn-light" 
             onClick={() => router.reload()}
            >Refresh
            </button>
        </div>
            </div>
            <div className="col-lg-8 m-auto">
        <div className="container d-flex justify-content-center flex-lg-row flex-column">

            <div className="section d-flex p-5 justify-content-center align-items-center">
                <Image src={deckBack} alt="deckBack" height={320} width={220}  loader={myLoader} />
            </div>
        <div className="section p-5 d-flex flex-row align-self-center flex-lg-column">
            
            <div  className= {show ? " container d-flex p-2 p-lg-5" : "d-none"}>
               
                {card  &&
                    
                    <Image src={card} alt="card" height={320} width={220}  loader={myLoader}/>
                }
                <div className="container">
                <h4 className="text-white text-center inline-text p-3">Raffle house</h4>
                </div>
            </div>
            <div className={show ? "container d-flex p-2 p-lg-5" : "d-none"}>
                

                { 
                    playerCard &&
                    
                    <Image src={playerCard} alt="card" height={320} width={220} loader={myLoader} />
                }
                <div className="container">
                    <h4 className="text-white text-center p-3">Player</h4>
                </div>
                
            </div>
        </div>
        </div>
            </div>
        </div>
        </div>
    )
}

export default CardGame;