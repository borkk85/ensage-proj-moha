import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CardForm from "../components/CardForm";
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
    } else {
      dispatch(reset())
    }

    if(admin) {
      dispatch(getCard())
    } else {
      navigate('/login')
    }
  
  }, [admin, navigate, isError, message, dispatch], [] )


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
    

    <CardForm />
      
    </>
    
  );
};

export default Admin;
