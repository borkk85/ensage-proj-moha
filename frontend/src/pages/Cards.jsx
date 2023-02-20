import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import { getCard, reset } from "../features/cards/cardSlice";
import HomeDisplay from "../components/HomeDisplay";

const Cards = () => {
  const { emotion } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { admin } = useSelector((state) => state.auth);
  const { cards, isLoading, isError, message } = useSelector(
    (state) => state.cards
  );
  const emotionCard = cards.filter((card) => card.emotion === emotion);

  useEffect(
    () => {
      if (isError) {
        console.log(message);
      } else {
        dispatch(reset());
      }

      dispatch(getCard());
    },
    [navigate, isError, message, dispatch],
    []
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (!cards) {
    return <Spinner />;
  }

  return (
    <>
      <HomeDisplay cards={cards} selectedCard={emotion} />
    </>
  );
};

export default Cards;
