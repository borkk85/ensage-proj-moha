import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CardForm from "../components/CardForm";
import CardItem from "../components/CardItem";
import Spinner from '../components/Spinner'
import AdminHeader from "../components/AdminHeader";
import { getCard, reset } from "../features/cards/cardSlice";


const Admin = () => {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { admin } = useSelector((state) => state.auth)
  const { cards, isLoading, isError, message } = useSelector(
    (state) => state.cards
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if(!admin) {
      navigate('/admin')
    }

    dispatch(getCard())

    return () => {
      dispatch(reset())
    }

  }, [admin, navigate, isError, message, dispatch] )


  if (isLoading) {
    return <Spinner />
  }

  if (!cards) {
    return <Spinner />
  }
  
  return (

    <>
    <AdminHeader/>    
    <section className="heading">
      <h1>Welcome {admin && admin.name}</h1>
      <p>Cards Modifier</p>
    </section>
    
    {admin && <CardForm />}

    <div className="main">
        <div className="card-container">
        {cards.length > 0 ? ( 
          <div className="collection">
                 
            {cards.map((card) => (
              <CardItem key={card._id$oid} card={card} />
            ))}       
        
        </div>
        ) : (
          <h3>You have not set any cards</h3>
          )}
       </div>
      </div>
    </>
    
  );
};

export default Admin;
