import axios from "axios";

const API_URL = "/api/cards/";

const createCard = async (cardData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, cardData, config);

  return response.data;
};

const getCard = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);
  // console.log(response.data); 
  return response.data;
};

const updateCard = async (cardData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL  + cardData._id, cardData, config);
  console.log(response.data); 
  return response.data;
};


const deleteCard = async (cardId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + cardId, config);
  
  return response.data;
};




const cardService = {
  createCard,
  getCard,
  updateCard,
  deleteCard
};

export default cardService;
