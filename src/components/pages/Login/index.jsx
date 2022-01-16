import React, { Component } from "react";
import logo from "../../../assets/logodashboard1.png";
// eslint-disable-next-line no-unused-vars
import styles from "../../../styles.css";
import {} from "react-router-dom";

class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);

    if (!e.target.email.value) {
      alert("O e-mail é obrigatório");
    } else if (!e.target.email.value) {
      alert("E-mail válido é obrigatório");
    } else if (!e.target.password.value) {
      alert("Senha requerida");
    } else if (
      e.target.email.value === "me@example.com" &&
      e.target.password.value === "123456"
    ) {
      window.open("http://localhost:3000/home", "_blank");
      e.target.email.value = "";
      e.target.password.value = "";
    } else {
      alert("Combinação incorreta de e-mail ou senha");
    }
  };

  handleClick = (e) => {
    e.preventDefault();

    alert("Goes to registration page");
  };

  render() {
    return (
      <div className="App">
        <img src={logo} className="logo" alt="Business view - Reports" />
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="nome@email.com.br" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" />
          </div>
          <button className="primary">ENTRAR</button>
        </form>
      </div>
    );
  }
}

export default Login;
