import React from "react";
import { useHistory } from "react-router";

const ProfilePage = () => {
  const history = useHistory();
  const handleSubmit = () => {
    history.push("/");
  };

  const pushToContacts = () => {
    history.push("/contacts");
  };

  return (
    <>
      <div className="container">
        <div className="content-title">
          <h1>Привет!</h1>
        </div>
        <div className="profile-buttons">
          <button
            className="button logOut-btn"
            type="button"
            onClick={handleSubmit}
          >
            Выйти из аккаунта
          </button>
          <button
            className="button btn-contacts"
            type="button"
            onClick={pushToContacts}
          >
            Перейти в контакты
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
