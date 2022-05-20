import Image from "next/image"
import cardDeck from "../pages/src/helpers/cardDeck"
import  deckBack  from "./public/images/cards/deckBack.svg"
import { useState, useEffect } from "react";

const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
};

let gameDeck = new cardDeck()

gameDeck.shuffle()
  const Games = () => {
      
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
                <h1 className="text-white  display-2 fw-bold text-center m-4">Games</h1>
            </div>
            <div className="container d-flex justify-content-around flex-lg-row flex-column">

                <div className="se]ction d-flex p-5 justify-content-center align-items-center">
                    <Image src={deckBack} alt="deckBack" height={320} width={220} layout="fixed" loader={myLoader} />
                </div>
            <div className="section p-5 d-flex flex-row align-self-center flex-lg-column">
                
                <div  className= {show ? "d-block container p-2 p-lg-5" : "d-none"}>
                    {card  &&
                        
                <Image src={card} alt="card" height={320} width={220} layout="fixed" loader={myLoader}/>
                    }
                </div>
                <div className={show ? "d-block container p-2 p-lg-5" : "d-none"}>
                    { 
                        playerCard &&

                <Image src={playerCard} alt="card" height={320} width={220} layout="fixed"loader={myLoader} />
                    }
                </div>
            </div>
            </div>
            <div className="section text-center p-3">
                <button className="btn fs-3 text-secondary btn-xl btn-light" onClick={() => setShow(!show)}>Try your luck</button>
            </div>
            <div className="section text-center p-3">
                <button className="btn fs-3 text-secondary btn-xl btn-light" onClick={() => window.location.reload(false) }>Refresh
                </button>
            </div>
        </div>
    )
}

export default Games