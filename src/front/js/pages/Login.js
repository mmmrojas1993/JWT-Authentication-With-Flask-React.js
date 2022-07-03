import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const token = sessionStorage.getItem("token");
  console.log("This Is Your Token: ", token);
  const handleClick = () => {
    actions.Login(email, password);
  };

  return (
    <div className="text-center mt-5">
      <h1>Login</h1>
      {token && token != "" && token != undefined ? (
        "You Are Logged In With This Token:" + token
      ) : (
        <div>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            placeholder="password "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleClick}>Login</button>
        </div>
      )}
    </div>
  );
};
