import { useState } from "react";
import { UserContext } from "./UserContext"
import useFetchAxios from "../hooks/useFetchAxios";
import Swal from "sweetalert2";

const UserProvider = ({ children }) => {

  const baseUrl = 'http://localhost:5000/api/auth';
  const [token, setToken] = useState( localStorage.getItem('token') || null );
  const [user, setUser] = useState(null);
  const { fetchData } = useFetchAxios();

  const login = async ({ email, password }) => {

    const result = await onFetchAuth({ endpoint: 'login', email, password });

    if(!result) {
      Swal.fire({
        icon: 'error',
        title: 'Error al iniciar sesión',
        text: 'Credenciales inválidas'
      });
      return;
    }

    onStoreToken(result.token);
    onChangeState({
      user: { name: 'Vladimir Faundez', email: result.email },
      token: result.token
    });

    return result;

  }

  const register = async ({ email, password }) => {

    const result = await onFetchAuth({ endpoint: 'register', email, password });

    if(!result) {
      Swal.fire({
        icon: 'error',
        title: 'Error registrando usuario',
        text: 'Intente nuevamente'
      });
      return;
    }

    onChangeState({
      user: { name: 'Vladimir Faundez', email: result.email },
      token: result.token
    });

    return result;

  }

  const me = async () => {
    try {

      const url = `${baseUrl}/me`;
      const options = {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }

      const result = await fetchData({ url, options });
      setUser({ name: 'Vladimir Faundez', ...result });
      return result;
      
      
    } catch (error) {
      onChangeState({ user: null, token: null });
      Swal.fire({
        icon: 'error',
        title: 'Error obteniendo usuario',
        text: error.message
      })
    }
  }

  const logout = () => {
    onChangeState({ user: null, token: null });
    localStorage.removeItem('token');
  }

  /*--- METODOS INTERNOS ---*/

  const onChangeState = ({ token, user }) => {
    setToken(token);
    setUser(user);
  }

  const onStoreToken = (token) => {
    localStorage.setItem('token', token);
  }

  const onFetchAuth = async ({ endpoint, email, password }) => {
    try {

      const url = `${baseUrl}/${endpoint}`;
      const options = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        data: { email, password }
      }

      const result = await fetchData({ url, options });
      return result;
      
    } catch (error) {
      onChangeState({ user: null, token: null });
      const titleMessage = {
        login: 'Error al iniciar sesión',
        register: 'Error registrando usuario'
      };
      return Swal.fire({
        icon: 'error',
        title: titleMessage[endpoint] || 'Error procesando petición',
        text: error.message
      })
    }
  }

  return (
    <UserContext.Provider
      value={{ user, token, login, register, me, logout }}
    >
      { children }
    </UserContext.Provider>
  )
}

export default UserProvider