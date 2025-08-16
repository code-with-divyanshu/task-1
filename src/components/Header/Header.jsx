import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userSlice";
import { persistor } from "../../redux/store";
import "./Header.css";

const Header = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closeMobileMenu = () => {
    const menuToggle = document.getElementById("menu-toggle");
    if (menuToggle) menuToggle.checked = false;
  };

  const handleLogout = () => {
    dispatch(logout());
    persistor.purge();
    closeMobileMenu();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="logo">Task 1</div>

      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">
        &#9776;
      </label>

      <div className="links">
        <NavLink to="/" className="nav-link" onClick={closeMobileMenu}>
          Login
        </NavLink>
        <NavLink to="/dashboard" className="nav-link" onClick={closeMobileMenu}>
          Dashboard
        </NavLink>
        <NavLink
          to="/dummy-list"
          className="nav-link"
          onClick={closeMobileMenu}
        >
          Dummy List
        </NavLink>
      </div>

      <div className="auth">
        {user ? (
          <>
            <span className="username">Hello, {user.name || "User"}</span>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <span className="guest">Guest</span>
        )}
      </div>
    </nav>
  );
};

export default Header;
