import React from "react";

function CardItem({ card }) {
  return (
 
       <>
            <img src={card.imageUrl} alt="" />
            <h2 className="main-title">{card.title}</h2>
            <p className="main-subtitle">{card.subtitle}</p>
       </>
    
  );
}

export default CardItem;
