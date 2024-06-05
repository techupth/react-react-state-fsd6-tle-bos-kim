import { useState } from "react";
import "./App.css";

function App() {
  const [greeting, setGreeting] = useState("Greeting Message");

  return (
    <div className="App">
      <div className="greeting-container">{greeting}</div>
      <div className="buttons">
        <button
          onClick={() => {
            setGreeting("สวัสดี!");
          }}
        >
          สวัสดี!
        </button>
        <button
          onClick={() => {
            setGreeting("Hi!");
          }}
        >
          Hi!
        </button>
        <button
          onClick={() => {
            setGreeting("你好!");
          }}
        >
          你好!
        </button>
      </div>
    </div>
  );
}

export default App;
