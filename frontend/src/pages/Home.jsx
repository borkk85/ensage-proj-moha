// import { useNavigate } from "react-router-dom";


const Home = () => {

  // const navigate = useNavigate();

  // const onClick = (emotion) => {
  //   navigate(`/cards/${emotion}`);
  // };



  return (
    <div className="categories-container">
      <h2 className="main-title">Hi, fellow human! How do you feel today?</h2>
        <div className="browse-categories">
            
          <div className="emotions" id="Uninspired" >
            <div className="icon-circle"></div>
            <p className="emotion-subtitle">Uninspired</p>
          </div>
          <div className="emotions" id="depressed" >
            <div className="icon-circle"></div>
            <p className="emotion-subtitle">Depressed</p>
          </div>
          <div className="emotions" id="angry" >
            <div className="icon-circle"></div>
            <p className="emotion-subtitle">Angry</p>
          </div>
          <div className="emotions" id="sad" >
            <div className="icon-circle"></div>
            <p className="emotion-subtitle">Sad</p>
          </div>
          <div className="emotions" id="scared" >
            <div className="icon-circle"></div>
            <p className="emotion-subtitle">Scared</p>
          </div>
          <div className="emotions" id="energetic" >
            <div className="icon-circle"></div>
            <p className="emotion-subtitle">Energetic</p>
          </div>
        </div>
    </div>
  )
}

export default Home
