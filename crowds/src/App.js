import {ChatEngine} from "react-chat-engine";
import "./App.css";

import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

const App=()=>{
    let username=localStorage.getItem('username');
    let password=localStorage.getItem('password');
    
    if(!localStorage.getItem('username')) return <LoginForm/>

    return (
          <ChatEngine
          height="100vh"
          projectID="d89312af-2b66-4ff3-9750-3d3a7b8191d8"
          userName={username}
          userSecret={password}
          renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps} />}
          />
    );
};

export default App;