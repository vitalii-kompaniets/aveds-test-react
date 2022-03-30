import React from "react";

const TextField = ({ label, type, name, value, onChange, error }) => {
  return (
    <div className="form-content__item">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <input
        className="form-input"
        type={type}
        name={name}
        value={value}
        id={name}
        onChange={onChange}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default TextField;
