import { useState } from "react";
import Footer from "./Footer";

function HomeDisplay({ cards, selectedCard}) {
  const card = cards.find((card) => card.emotion === selectedCard);
  const { _id, emotion, quotes } = card || {};
  const [qouteIndex, setQuoteIndex] = useState(0);

  const leftArrow = () => {
    if(qouteIndex === 0) {
      setQuoteIndex(quotes.length - 1)
    } else {
      setQuoteIndex(qouteIndex - 1)
    }
  }

  const rightArrow = () => {
    if(qouteIndex === quotes.length - 1) {
      setQuoteIndex(0);
    } else {
      setQuoteIndex(qouteIndex + 1)
    }
  }

  return (
    <>
    <div className="card-container">
      {quotes && quotes.length > 0 && (
        <div className="collection" key={_id} value={_id}>
          {emotion}

          <img src={quotes[qouteIndex].imageUrl} alt="" />
          <h2 className="main-title">{quotes[qouteIndex].title}</h2>
          <p className="main-subtitle">{quotes[qouteIndex].subtitle}</p>
        </div>
    
      )}
      </div>
      <Footer leftArrow={leftArrow} rightArrow={rightArrow}/>
    </>
    
  );
}

export default HomeDisplay;
