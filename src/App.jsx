import { useState } from "react";
import "./App.css";

function App() {
  const [greeting, setGreeting] = useState("Greeting Message");

  function handleClick(text) {
    return function () {
      setGreeting(text);
    };
  }

  function resetGreeting() {
    setGreeting("Greeting Message");
  }

  return (
    <div className="App">
      <div className="greeting-container">{greeting}</div>
      <div className="buttons">
        <button onClick={handleClick("สวัสดี!")}>สวัสดี!</button>
        <button onClick={handleClick("Hi!")}>Hi!</button>
        <button onClick={handleClick("你好!")}>你好!</button>
        <button onClick={resetGreeting}>Reset</button>
      </div>
    </div>
  );
}

export default App;
