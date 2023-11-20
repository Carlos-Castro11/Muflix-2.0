import React from "react";
import { Link, useNavigate } from "react-router-dom";
import stylesBtn from "./Form/Button.module.css";
import useForm from "../Hooks/useForm";
import { UserContext } from "../UserContext";

// COMPONENTS
import Banner from "./Banner/Banner";
import Input from "./Form/Input";
import Button from "./Form/Button";
import lock from "../Assets/icons/lock.svg";
import emailIcon from "../Assets/icons/email.svg";

const LoginForm = () => {
  const { userLogin, error, loading, login } = React.useContext(UserContext);
  const email = useForm("email");
  const password = useForm();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    if (email.validate() && password.validate()) {
      await userLogin(email.value, password.value);
    } else {
      return;
    }
  }

  if (login) navigate("/");
  else
    return (
      <>
        <Banner>
          <form onSubmit={handleSubmit} className={`form animeLeft`}>
            <h3 className="titleForm">Login</h3>
            {error && <p className="error">{error}</p>}
            <Input
              type="email"
              name="email"
              label="Email"
              icon={emailIcon}
              {...email}
            />
            <Input
              type="password"
              name="password"
              label="Senha"
              icon={lock}
              {...password}
            />
            {loading ? (
              <Button disabled>Enviando...</Button>
            ) : (
              <Button>Entrar</Button>
            )}
            <p>Não possui uma conta?</p>
            <Link className={stylesBtn.button} to="/login/create">
              Cadastrar-se
            </Link>
          </form>
        </Banner>
      </>
    );
};

export default LoginForm;
