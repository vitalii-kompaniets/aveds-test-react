import React, { useState } from "react";
import api from "../users";

const ContactsPage = () => {
  const [users] = useState(api.users.fetchAll());
  return (
    <>
      <div className="container">
        <div className="table">
          <thead>
            <tr>
              <th>Логин</th>
              <th>Пароль</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td>{user.name}</td>
                <td>{user.password}</td>
              </tr>
            ))}
          </tbody>
        </div>
      </div>
    </>
  );
};

export default ContactsPage;
