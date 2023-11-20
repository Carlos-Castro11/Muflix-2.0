import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [errorRegister, setErrorRegister] = React.useState(null);

  const navigate = useNavigate();

  const userLogin = React.useCallback(
    async function (email, password) {
      try {
        setLoading(true);
        setError(null);
        const res = await axios.post("http://localhost:8000/login", {
          email,
          password,
        });
        if (res.data.response) {
          setLogin(true);
          setError(null);
          setErrorRegister(null);
          setData(res.data.name);
          window.localStorage.setItem("token", res.data.token);
          navigate("/movies");
        } else {
          setError(res.data.error);
          setLogin(false);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    },
    [navigate]
  );

  async function userLogout() {
    setData(null);
    setError(null);
    setLogin(false);
    setLoading(false);
    setErrorRegister(null);
    window.localStorage.removeItem("token");
    navigate("/login");
  }

  async function register(name, email, password) {
    try {
      setErrorRegister(null);
      setLoading(true);
      await axios
        .post("http://localhost:8000/user", {
          name,
          email,
          password,
        })
        .then((res) => {
          if (res.status === 200) {
            setLogin(true);
            setData(name);
            setErrorRegister(null);
            window.localStorage.setItem("token", res.data);
            navigate("/movies");
          }
        })
        .catch((err) => {
          setErrorRegister(err.response.data);
        });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          const res = await axios.post("http://localhost:8000/validateJwt", {
            token,
          });
          if (res.data.response) {
            setLogin(true);
            setError(null);
            setErrorRegister(null);
            setData(res.data.name);
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        return;
      }
    }
    autoLogin();
  }, [userLogin, navigate]);

  return (
    <UserContext.Provider
      value={{
        userLogin,
        data,
        login,
        userLogout,
        error,
        loading,
        register,
        errorRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
