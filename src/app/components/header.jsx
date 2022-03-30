import React from "react";
import logoImg from "../img/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <Link to="/">
          <div className="logo">
            <img src={logoImg} alt="logo" />
          </div>
        </Link>
        <div className="header-btn">
          <button className="header-btn__contacts" type="submit">
            Контакты
          </button>

          <Link to="/login">
            <button className="header-btn__login btn-login" type="submit">
              Войти
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
