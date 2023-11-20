import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./AdminDelete.module.css";

// COMPONENTS
import Banner from "../Banner/Banner";
import axios from "axios";

const AdminDelete = () => {
  const [confirm, setConfirm] = React.useState();
  const [user, setUser] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  React.useEffect(() => {
    async function getUserData() {
      try {
        const res = await axios.get(`http://localhost:8000/user/${id}`);
        setUser(res.data.result);
      } catch (err) {
        console.log(err);
      }
    }
    getUserData();
  }, [id]);

  async function handleSubmit(event) {
    event.preventDefault();
    if (confirm) {
      setLoading(true);
      await axios.delete(`http://localhost:8000/user/${id}`);
      navigate("/login/admin");
      try {
      } catch {
      } finally {
        setLoading(false);
      }
    } else {
      navigate("/login/admin");
    }
  }

  return (
    <section>
      <Banner>
        <form className="form" onSubmit={handleSubmit}>
          <h1>Tem certeza que quer deletar este usuário?</h1>
          <p>ID: {id}</p>
          {user && <p>Nome: {user.name}</p>}
          {user && <p>Email: {user.email}</p>}
          {user && <p>Função: {user.role}</p>}
          <div className={styles.buttons}>
            <button onClick={() => setConfirm(false)} className={styles.cancel}>
              Cancelar
            </button>
            {loading ? (
              <button
                onClick={() => setConfirm(true)}
                className={styles.delete}
                style={{ cursor: "wait" }}
              >
                Deletando...
              </button>
            ) : (
              <button
                onClick={() => setConfirm(true)}
                className={styles.delete}
              >
                Deletar
              </button>
            )}
          </div>
        </form>
      </Banner>
    </section>
  );
};

export default AdminDelete;
