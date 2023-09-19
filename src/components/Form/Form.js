import React from "react";

export const Form = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <>
      <form className="form">
        <p className="form_username-text form-text">Имя пользователя:</p>
        <input
          className="form_username-input form-input"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <p className="form_email-text form-text">Email:</p>
        <input
          className="form_email-input form-input"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <p className="form_password-text form-text">Пароль:</p>
        <input
          className="form_password-input form-input"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <p className="text-you">Вы ввели:</p>
        <div className="data-block">
          <p className="">Имя: {username}</p>
          <p className="">Email: {email}</p>
          <p className="">Пароль: {password}</p>
        </div>
      </form>
    </>
  );
};
