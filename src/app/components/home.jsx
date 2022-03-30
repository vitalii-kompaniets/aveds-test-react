import React from "react";
import icon1 from "../img/online.png";
import icon2 from "../img/emergency.png";
import icon3 from "../img/therapy.png";

const Home = () => {
  return (
    <>
      <div className="content">
        <div className="container">
          <div className="content-title">
            <h1>Место для получения медицинской помощи</h1>
          </div>
          <div className="content-buttons">
            <button className="button btn-login" type="submit">
              Войти
            </button>
            <button className="button" type="submit">
              Контакты
            </button>
          </div>
          <div className="content-services-cards">
            <div className="services-card__item">
              <div className="services-card__item-icon">
                <img src={icon1} alt="icon" />
              </div>
              <div className="services-card__item-title">
                <h5>Онлайн-прием</h5>
              </div>
              <div className="services-card__item-desc">
                <p>Рыба текст</p>
              </div>
            </div>
            <div className="services-card__item">
              <div className="services-card__item-icon">
                <img src={icon2} alt="icon" />
              </div>
              <div className="services-card__item-title">
                <h5>Экстренный Случай</h5>
              </div>
              <div className="services-card__item-desc">
                <p>Рыба текст</p>
              </div>
            </div>
            <div className="services-card__item">
              <div className="services-card__item-icon">
                <img src={icon3} alt="icon" />
              </div>
              <div className="services-card__item-title">
                <h5>Лечение рака</h5>
              </div>
              <div className="services-card__item-desc">
                <p>Рыба текст</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
