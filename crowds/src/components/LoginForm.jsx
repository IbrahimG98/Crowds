import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError]=useState("");

  const handleSubmit = async (e) => {
      e.preventDefault();
      const authObject={'Project-ID':"d89312af-2b66-4ff3-9750-3d3a7b8191d8","User-Name":username,"User-Secret":password};
      try {
            //username | password -> chatengine -> logged in
            // await  axios.get("https://api.chatengine.io/chats", {headers:authObject});
            await axios.get("https://api.chatengine.io/chats", {headers:authObject});
            localStorage.setItem('username',username);
            localStorage.setItem('password',password);
            window.location.reload();
      } catch (error) {
          //display an error
          setError("Oops.Incorrect credentials!")
          
      }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Crowds</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Enter your username ..."
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Enter your password ..."
            required
          />
          <div align="center">
              <button style={{border:"none",borderRadius:13,backgroundColor:"#a3c5eb", padding :"5%",outline:"none"}}>
              <span>Start using the app!</span>
              </button>
          </div>
          <h2 style={{color:"whitesmoke", textAlign:"center"}} className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
