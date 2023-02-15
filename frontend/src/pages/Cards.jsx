import { useParams } from 'react-router-dom';
import { useEffect, useNavigate } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardItem from "../components/CardItem";
import Spinner from "../components/Spinner";
import { getCard, reset } from "../features/cards/cardSlice";

const Cards = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { emotion } = useParams();

  const { cards, isLoading, isError, message } = useSelector(
    (state) => state.cards
  );

  useEffect(() => {
    if (isError) {
      console.error(message);
    }

    dispatch(getCard());

    return () => {
      dispatch(reset());
    };

  }, [navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }



  return (
    <>
      <div className="main">
        <div className="card-container">
          <div className="collection">
            {cards.length > 0 ? (
          <div className="emotion" id={emotion}>
            {cards.map((card) => (
              <CardItem key={card.emotion} card={card}/>
            ))}         
            </div>
            ) : ( 
              <h3>No cards available</h3>
            )}
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Cards;
