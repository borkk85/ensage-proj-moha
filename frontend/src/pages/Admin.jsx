import { FaSignInAlt, FaSignOutAlt, FaUser, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo (2).png";

const Admin = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/admin/login">
            <FaSignInAlt />
            Login
          </Link>
        </li>
        <li>
          <Link to="admin/register">
            <FaUser />
            Register
          </Link>
        </li>
        <li>
          <Link to="/cards">
            <FaEdit /> Create or Modify
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Admin;
