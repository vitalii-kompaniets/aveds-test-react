import React, { useEffect, useState } from "react";
import TextField from "./textField";
import { validator } from "../utils/validator";
import { useHistory } from "react-router";

const LoginForm = () => {
  const [data, setData] = useState({ name: "", password: "" });
  const [errors, setErrors] = useState({});
  const history = useHistory();
  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const validatorConfig = {
    name: {
      isRequired: {
        message: "Логин обязателен для заполнения",
      },
    },
    password: {
      isRequired: {
        message: "Пароль обязателен для заполнения",
      },
      min: {
        message: "Пароль должен содержать минимум 8 символов",
        value: 8,
      },
    },
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
    if (Object.keys(errors).length !== 0) return;
    console.log(data);
    history.push("/profile");
  };

  return (
    <>
      <div className="modal-overlay">
        <form className="form-auth" id="form" onSubmit={handleSubmit}>
          <div className="form-title">
            <h2>Авторизация</h2>
          </div>
          <div className="form-content">
            <TextField
              label="Логин"
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              error={errors.name}
            />
            <TextField
              label="Пароль"
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              error={errors.password}
            />
            {/* <div className="form-content__item">
              <label className="form-label" htmlFor="name">
                Логин
              </label>
              <input
                className="form-input"
                type="text"
                name="name"
                value={data.name}
                id="form-name"
                onChange={handleChange}
                error={errors.name}
              />
            </div>
            <div className="form-content__item">
              <label className="form-label" htmlFor="password">
                Пароль
              </label>
              <input
                className="form-input password-input"
                type="password"
                name="password"
                value={data.password}
                id="form-password"
                onChange={handleChange}
                error={errors.password}
              />
            </div> */}
            <div className="form-button">
              <button className="button btn-login-form" type="submit">
                Войти
              </button>
              <button className="button btn-cancel" type="button">
                Отмена
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
