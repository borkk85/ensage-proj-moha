import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Admin from "./pages/Admin";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Cards from "./pages/Cards";


// const AdminRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         if (localStorage.getItem("token")) {
//           return <Component {...props} />;
//         } else {
//           return (
//             <div>
//               <h1>You are not authorized to view this page</h1>
//               <Link to="/">Go to Homepage</Link>
//             </div>
//           );
//         }
//       }}
//     />
//   );
// };

function App() {
  return (
    <Router>
      <div className="main">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/cards" element={<Cards />} />
          {/* <AdminRoute path="/admin/register" element={<Register />} />
          <AdminRoute path="/admin/login" element={<Login />} />
          <AdminRoute path="/admin/cards" element={<Cards />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
