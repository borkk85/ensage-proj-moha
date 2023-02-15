const asyncHandler = require("express-async-handler");
const Card = require("../model/cardModel");
const Admin = require("../model/adminModel");

const getCard = asyncHandler(async (req, res) => {
  
    const cards = await Card.find({admin: req.admin.id});
    
    if (cards.length === 0) {
      res.status(400);
      throw new Error("Card not found");
    }
  
    res.status(200).json({ cards });
  });

const postCard = asyncHandler(async (req, res) => {
  
  
  if (!req.body.emotion) {
    res.status(400);
    throw new Error("Please add an emotion");
  }
 
  const card = await Card.create({
    admin: req.admin.id,
    emotion: req.body.emotion,
    quotes: req.body.quotes,    
  });
  res.status(200).json( {card} );
});

const updateCard = asyncHandler(async (req, res) => {
  const card = await Card.findById(req.params.id);

  if (!card) {
    res.status(400)
    throw new Error("Card not found");
  }
  res.status(200).json({ card });

  const admin = await Admin.findById(req.admin.id)

  //Check for user
  if(!admin) {
    res.status(401)
    throw new Error('User not found')
  }

  if(card.admin.toString() !== admin.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedCard = await Card.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json({ updatedCard });
});

const deleteCard = asyncHandler(async (req, res) => {
    const card = await Card.findById(req.params.id);

    if (!card) {
        res.status(400)
        throw new Error("Card not found");
      }

      await card.remove()

      res.status(200).json({ id: req.params.id });

});

module.exports = {
  getCard,
  postCard,
  updateCard,
  deleteCard,
};
