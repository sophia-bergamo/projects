import "./App.css";
import { useState, useEffect } from "react";
import { validEmail, validPassword } from "./utils/regex";
import { gql, useMutation } from '@apollo/client';

const MUTATION = gql`
mutation Login($data: LoginInput!) {
  login(data: $data) {
    user {
      name
      email
    }
  token
  }
}
`;

type LoginInput = {
  data: {
    email: string;
    password: string;
  }
}

type LoginResult = {
  login: {
    user: {
      name: string;
      email: string;
    }
    token: string;
  }
}

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [inputEmailErr, setInputEmailErr] = useState(false);
  const [inputPassordErr, setInputPasswordErr] = useState(false);

  const [mutation, { data, loading, error }] = useMutation<LoginResult, LoginInput>(MUTATION);

  useEffect(() => {
    if (data?.login.token) {
      localStorage.setItem("token", data.login.token) //set guarda e get pega
    }
  }, [data])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>

  console.log(data)

  const validate = () => {
    if (!validEmail.test(email)) {
      setInputEmailErr(true);
    } else {
      setInputEmailErr(false);
    }
    if (!validPassword.test(password)) {
      setInputPasswordErr(true);
    } else {
      setInputPasswordErr(false);
    }

    if (validEmail.test(email) && validPassword.test(password)) {
      mutation({ variables: { data: { email, password } } })
    }
  };
  return (
    <div >
      <h1>LOGIN</h1>

      <input type="text" placeholder="example@email.com" value={email} onChange={event => setEmail(event.target.value)} />
      {inputEmailErr && <p>Digite um email valido!</p>}

      <input type="password" placeholder="example01" value={password} onChange={(event) => setPassword(event.target.value)} />
      {inputPassordErr && <p>Digite uma senha mais segura</p>}

      <button onClick={validate} >ENTRAR</button>

    </div>
  )
}
export default App;
