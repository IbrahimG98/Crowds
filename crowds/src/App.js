import {ChatEngine} from "react-chat-engine";
import "./App.css";

import ChatFeed from "./components/ChatFeed";

const App=()=>{

    return (
          <ChatEngine
          height="100vh"
          projectID="d89312af-2b66-4ff3-9750-3d3a7b8191d8"
          userName="TestUser1"
          userSecret="123123"
          renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps} />}
          />
    );
};

export default App;