import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Home = () => {
  const { emotion } = useParams();
  
  return (
    <div className="categories-container">
      <h2 className="main-title">Hi, fellow human! How do you feel today?</h2>
      <div className="browse-categories">
      <Link to={`/cards/${emotion || 'Uninspired'}`}>
        <div className="emotions" id="Uninspired">
          <div className="icon-circle"></div>
          <p className="emotion-subtitle">Uninspired</p>
        </div>
        </Link>
        <Link to={`/cards/${emotion || 'Depressed'}`}>
        <div className="emotions" id="depressed">
          <div className="icon-circle"></div>
          <p className="emotion-subtitle">Depressed</p>
        </div>
        </Link>
        <Link to={`/cards/${emotion || 'Angry'}`}>
        <div className="emotions" id="angry">
          <div className="icon-circle"></div>
          <p className="emotion-subtitle">Angry</p>
        </div>
        </Link>
        <Link to={`/cards/${emotion || 'Sad'}`}>
        <div className="emotions" id="sad">
          <div className="icon-circle"></div>
          <p className="emotion-subtitle">Sad</p>
        </div>
        </Link>
        <Link to={`/cards/${emotion || 'Scared'}`}>
        <div className="emotions" id="scared">
          <div className="icon-circle"></div>
          <p className="emotion-subtitle">Scared</p>
        </div>
        </Link>
        <Link to={`/cards/${emotion || 'Energetic'}`}>
        <div className="emotions" id="energetic">
          <div className="icon-circle"></div>
          <p className="emotion-subtitle">Energetic</p>
        </div>
        </Link>




      </div>
    </div>
  );
};

export default Home;
