import { useLocation } from "react-router-dom"
import Logo from '../assets/Logo (2).png'
import Vector from '../assets/Vector (1).png'

const Header = () => {
  const {pathname} = useLocation();
  if(pathname === "/admin") return null;

  return (
        <div className="header-container">
        <div className="hamburger-menu">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="dollar-vector">
          <img src={Vector} alt="" />
        </div>
      </div>
    )
}

export default Header
