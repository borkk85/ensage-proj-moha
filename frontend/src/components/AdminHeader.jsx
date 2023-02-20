import Logo from "../assets/Logo (2).png";
import { FaSignInAlt, FaSignOutAlt, FaUser, FaCreditCard } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";


const AdminHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { admin } = useSelector((state) => state.auth);
  

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  

  return (
<>
  <header className="header admin">
    <Link to="/">
      <img src={Logo} alt="" />
    </Link>
    <h1>Register or Login in order to modify data</h1>
    <ul>
        {admin ? (
          <li>
            <button className='btn' onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>

          
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
  </header> 
</>
  );
};

export default AdminHeader;
