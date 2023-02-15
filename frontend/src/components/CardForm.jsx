import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createCard } from "../features/cards/cardSlice";

function CardForm() {
  
  const { admin } = useSelector((state) => state.auth);

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
      admin: admin.id,
    };
    dispatch(createCard(newCard));
  };

  return (
    <section className="form">
      <h2>Add New Card</h2>
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
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Subtitle:</label>
          <input
            type="text"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
      </form>
      <div className="form-group">
        <button className="btn btn-block" type="submit">
          Add Goal
        </button>
      </div>
    </section>
  );
}

export default CardForm;
