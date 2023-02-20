import { useState } from "react";
import { useLocation } from "react-router-dom"


const Footer = ({leftArrow, rightArrow}) => {

  const [show, setShow] = useState(false);
   const {pathname} = useLocation();
   if(pathname === "/" || pathname === "/admin") return null;


  return (
    
      <div className="footer-container">
        <div className="arrow-left" onClick={leftArrow}>
          <img src="https://storage.googleapis.com/imgupload-test/Icon.svg" alt="" />
        </div>
        <div className="button">
          <button className="share-btn" onClick={() => setShow(!show)}>Share</button>
        </div>
        <div className="arrow-right" onClick={rightArrow}>
          <img src="https://storage.googleapis.com/imgupload-test/Icon%20(1).svg" alt="" />
        </div>
       {show && (
        <div className="popup-window">
          <div className="social">
            <p>Share to inspire someone</p>
            <div className="social-icons">
              <div className="social-icon-circle">
                <img src="https://storage.googleapis.com/imgupload-test/fb.png" alt="" />
              </div>
              <div className="social-icon-circle">
                <img src="https://storage.googleapis.com/imgupload-test/insta.png" alt="" />
              </div>
              <div className="social-icon-circle">
                <img src="https://storage.googleapis.com/imgupload-test/tablet.png" alt="" />
              </div>
              <div className="social-icon-circle">
                <img src="https://storage.googleapis.com/imgupload-test/pin.png" alt="" />
              </div>
              <div className="social-icon-circle">
                <img src="https://storage.googleapis.com/imgupload-test/lin.png" alt="" />
              </div>
              <div className="social-icon-circle">
                <img src="https://storage.googleapis.com/imgupload-test/chain.png" alt="" />
              </div>
            </div>
          </div>
          <div className="share">
            <p>Or download as wallpaper</p>
            <div className="download">
              <div className="download-icons">
                <div className="download-icon-circle">
                  <img src="https://storage.googleapis.com/imgupload-test/phone.png" alt="" />
                </div>
                <div className="download-icon-circle">
                  <img src="https://storage.googleapis.com/imgupload-test/tablet.png" alt="" />
                </div>
                <div className="download-icon-circle">
                  <img src="https://storage.googleapis.com/imgupload-test/desktop.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
         )} 
      </div>
    
  )
}

export default Footer
