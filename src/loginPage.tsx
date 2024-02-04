import { useState } from "react";
import { useAuthToken } from "./useHooks"
//axios
import axios from 'axios';

export default function LoginPage() {
  const [authToken, setAuthToken] = useAuthToken();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const login = async () => {
    axios.post('http://localhost:3000/entrance/login', {
      username: username,
      password: password
    }).then((response) => {
      console.log(response.data);
      setAuthToken(response.data.token);
    }).catch((error) => {
      console.log(error);
      setAuthToken("2222");
    });
  }

  const onKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      login()
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      <input type="text" placeholder="username" onChange={
        (e: any) => {
          setUsername(e.target.value)
        }
      }
        onKeyDown={onKeyDown}
      />
      <input type="password" placeholder="password"
        onChange={
          (e: any) => {
            setPassword(e.target.value)
          }}
        onKeyDown={onKeyDown}
      />
      <button onClick={login}>Login</button>

    </div>
  )
}
