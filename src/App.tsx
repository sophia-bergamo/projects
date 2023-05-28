import "./App.css";
import { useState } from "react";

import { validEmail, validPassword } from "./utils/regex";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [inputEmailErr, setInputEmailErr] = useState(false);
  const [inputPassordErr, setInputPasswordErr] = useState(false);

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
    
  };

  return (
    <div>
      <h1>LOGIN</h1>
      
      <input type="text" placeholder="example@email.com" value={email} onChange={event => setEmail(event.target.value)}/>
      {inputEmailErr && <p>Digite um email valido!</p>}

      <input  type="password"  placeholder="example01" value={password} onChange={(event) => setPassword(event.target.value)}/>
      {inputPassordErr && <p>Digite uma senha mais segura</p>}

      <button onClick={validate}>ENTRAR</button>

    </div>
  );
}

export default App;