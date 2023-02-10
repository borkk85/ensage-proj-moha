import { useLocation } from "react-router-dom"


const Footer = () => {

   const {pathname} = useLocation();
   if(pathname === "/" || pathname === "/admin") return null;


  return (
    
      <div className="footer-container">
        <div className="arrow-left">
          <img src="assets/Icon.svg" alt="" />
        </div>
        <div className="button">
          <button className="share-btn">Share</button>
        </div>
        <div className="arrow-right">
          <img src="assets/Icon (1).svg" alt="" />
        </div>
        <div className="popup-window">
          <div className="social">
            <p>Share to inspire someone</p>
            <div className="social-icons">
              <div className="social-icon-circle">
                <img src="assets/fb.png" alt="" />
              </div>
              <div className="social-icon-circle">
                <img src="assets/insta.png" alt="" />
              </div>
              <div className="social-icon-circle">
                <img src="assets/twi.png" alt="" />
              </div>
              <div className="social-icon-circle">
                <img src="assets/pin.png" alt="" />
              </div>
              <div className="social-icon-circle">
                <img src="assets/lin.png" alt="" />
              </div>
              <div className="social-icon-circle">
                <img src="assets/chain.png" alt="" />
              </div>
            </div>
          </div>
          <div className="share">
            <p>Or download as wallpaper</p>
            <div className="download">
              <div className="download-icons">
                <div className="download-icon-circle">
                  <img src="assets/phone.png" alt="" />
                </div>
                <div className="download-icon-circle">
                  <img src="assets/tablet.png" alt="" />
                </div>
                <div className="download-icon-circle">
                  <img src="assets/desktop.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default Footer
