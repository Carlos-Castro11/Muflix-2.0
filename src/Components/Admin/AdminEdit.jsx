import React from "react";
import styles from "./AdminEdit.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import useForm from "../../Hooks/useForm";
// COMPONENTS
import Input from "../Form/Input";
import Button from "../Form/Button";
import emailIcon from "../../Assets/icons/email.svg";
import userIcon from "../../Assets/icons/user.svg";

const AdminEdit = () => {
  const { id } = useParams();
  const [user, setUser] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [message, setMessage] = React.useState("");
  const name = useForm();
  const email = useForm();
  const role = useForm();

  React.useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(`http://localhost:8000/user/${id}`);
        setUser(response.data.result);
        if (response.data.response === false) {
          setError(response.data.error);
        } else {
          setError(null);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getUser();
  }, [id]);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setMessage("");
    try {
      const res = await axios.put("http://localhost:8000/user", {
        id: id,
        name: name.value,
        email: email.value,
        role: role.value,
      });
      if (res.data.response) {
        setError(null);
        setMessage(res.data.message);
      } else {
        setError(res.data.error);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className={styles.backgroundEdit}>
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="title">Editar usuário</h1>
        {error && <p className="error animeLeft">{error}</p>}
        {message && <p className="success animeLeft">{message}</p>}
        <Input
          label="Nome"
          icon={userIcon}
          {...name}
          placeholder={user ? user.name : ""}
        />
        <Input
          label="Email"
          icon={emailIcon}
          {...email}
          placeholder={user ? user.email : ""}
        />
        <Input label="Funçao" {...role} placeholder={user ? user.role : ""} />
        {loading ? (
          <Button disabled>Atualizando...</Button>
        ) : (
          <Button>Atualizar</Button>
        )}
      </form>
    </section>
  );
};

export default AdminEdit;
