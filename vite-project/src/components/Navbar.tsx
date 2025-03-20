import React, { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Link } from "react-router-dom"
import "../styles/navbar.css"

const Navbar: React.FC = () => {
  const { user, logout } = useContext(AuthContext) || {};

  return (
    <nav className="navbar">
      <Link to="/">Bosh sahifa</Link>
      <Link to="/tours">Sayohatlar</Link>
      <Link to="/categories">Kategoriyalar</Link>
      {user ? (
        <>
          <span>Xush kelibsiz, {user?.username || "Mehmon"}!</span>
          <button onClick={logout} className="logout-btn">
            Chiqish
          </button>
        </>
      ) : (
        <Link to="/login">Kirish</Link>
      )}
    </nav>
  );
};

export default Navbar;
