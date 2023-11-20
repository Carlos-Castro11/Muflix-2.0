import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Admin.module.css";

// COMPONENTS
import { ReactComponent as Edit } from "../../Assets/icons/edit.svg";
import { ReactComponent as Delete } from "../../Assets/icons/delete.svg";

const Admin = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    async function getUsers() {
      try {
        const result = await axios.get("http://localhost:8000/user");
        setUsers(result.data.users);
      } catch (err) {
        console.log(err);
      }
    }
    getUsers();
  }, []);

  return (
    <section className={styles.adminBackground}>
      <div className={styles.adminForm}>
        <h1 className="title">Todos os usuários</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Função</th>
              <th>X</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td className={styles.buttons}>
                  <Link to={`delete/${user.id}`} className={styles.delete}>
                    <Delete />
                  </Link>
                  <Link to={`edit/${user.id}`} className={styles.edit}>
                    <Edit />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Admin;
