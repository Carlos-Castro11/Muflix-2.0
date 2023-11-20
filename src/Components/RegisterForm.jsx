import React from "react";
import useForm from "../Hooks/useForm";
import { UserContext } from "../UserContext";
// COMPONENTS
import Banner from "./Banner/Banner";
import Input from "./Form/Input";
import Button from "./Form/Button";
import lock from "../Assets/icons/lock.svg";
import emailIcon from "../Assets/icons/email.svg";
import userIcon from "../Assets/icons/user.svg";

const RegisterForm = () => {
  const name = useForm();
  const email = useForm("email");
  const password = useForm();
  const { register, loading, errorRegister } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    if (name.validate() && email.validate() && password.validate()) {
      await register(name.value, email.value, password.value);
    }
  }

  return (
    <>
      <Banner>
        <form className={`form animeLeft`} onSubmit={handleSubmit}>
          <h3 className="titleForm">Cadastro</h3>
          {errorRegister && <p className="error">{errorRegister}</p>}
          <Input
            type="text"
            name="user"
            label="Nome"
            icon={userIcon}
            {...name}
          />
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
            <Button disabled>Criando...</Button>
          ) : (
            <Button>Criar conta</Button>
          )}
        </form>
      </Banner>
    </>
  );
};

export default RegisterForm;
