import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createCard,
  updateCard,
  deleteCard,
} from "../features/cards/cardSlice";
import { FaPlusCircle, FaEdit, FaSave } from "react-icons/fa";

function CardForm() {
  const { cards } = useSelector((state) => state.cards);

  const [selectedCardId, setSelectedCardId] = useState("");
  const selectedCard = cards.find((card) => card._id === selectedCardId);

  const [visibleForm, setVisibleForm] = useState(false);
  const [newCard, setNewCard] = useState(false);
  const [existingCard, setExistingCard] = useState(false);

  const addNew = () => {
    setVisibleForm(!visibleForm);
    setNewCard(true);
    setExistingCard(false);
  };

  const modifyExisting = () => {
    setVisibleForm(!visibleForm);
    setNewCard(false);
    setExistingCard(true);
  };

  const [emotion, setEmotion] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const newCard = {
      emotion: emotion,
      quotes: [
        {
          title: title,
          subtitle: subtitle,
          imageUrl: imageUrl,
        },
      ],
    };
    dispatch(createCard(newCard))
  };

  function handleUpdateCard(e) {
    e.preventDefault();
    const updatesCard = {
      ...selectedCard,
      quotes: [
        ...selectedCard.quotes,
        {
          title: title,
          subtitle: subtitle,
          imageUrl: imageUrl,
        },
      ],
    };
    dispatch(updateCard(updatesCard))

  }


  return (
    <>
      <section className="form">
        <button onClick={addNew} className="btn btn-block">
          {visibleForm ? "Add New" : "Add New"}
        </button>
        <button onClick={modifyExisting} className="btn btn-block">
          {visibleForm ? "Modify Existing" : "Modify Existing"}
        </button>
        {newCard && !visibleForm ? (
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label>Emotion:</label>
              <input
                type="text"
                value={emotion}
                onChange={(e) => setEmotion(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Title: </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Subtitle: </label>
              <input
                type="text"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Image URL: </label>
              <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>

            <button className="btn btn-block" type="submit">
              <FaPlusCircle />
              Add Card
            </button>
          </form>
        ) : null}
        {existingCard && !visibleForm ? (
          <form onSubmit={handleUpdateCard}>
            <div className="form-group">
              <label>Select a card to modify:</label>
              <select
                value={selectedCardId}
                onChange={(e) => setSelectedCardId(e.target.value)}
              >
                <option value="">-- Select a Card --</option>
                {cards.map((card) => (
                  <option key={card._id} value={card._id}>
                    {card.emotion}
                  </option>
                ))}
              </select>
            </div>
            {selectedCard && (
              <div>
                <div className="form-group">
                  <label>Emotion:</label>
                  <input
                    type="text"
                    value={selectedCard.emotion}
                    onChange={(e) => setEmotion(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Title:</label>
                  <input
                    type="text"
                    value={selectedCard.title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Subtitle:</label>
                  <input
                    type="text"
                    value={selectedCard.subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Image URL:</label>
                  <input
                    type="text"
                    value={selectedCard.imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                  />
                </div>
                <button className="btn btn-block" type="submit">
                  <FaSave /> Save Changes
                </button>
                <button
                  onClick={() => dispatch(deleteCard(selectedCardId))}
                  className="btn btn-block"
                >
                  X Delete
                </button>
              </div>
            )}
          </form>
        ) : null}
      </section>
    </>
  );
}

export default CardForm;
