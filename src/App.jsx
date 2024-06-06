import "./App.css";
import { useState  } from "react";


function App() {
 
  const firstGreeting = "Greeting Message"
  const [isGreeting, changeGreeting] = useState(firstGreeting);
  const changeSet = (eventGetdata) => {
      changeGreeting(eventGetdata);
      setTimeout(() => {changeGreeting(firstGreeting)}, 1500);
  };
  return (
    <div className="App">
      <div className="greeting-container">{isGreeting}</div>
      <div className="buttons">
        <button onClick={() => changeSet('สวัสดี!')}>สวัสดี!</button>
        <button onClick={() => changeSet('Hi!')}>Hi!</button>
        <button onClick={() => changeSet('你好!')}>你好!</button>
      </div>
    </div>
  );
}

export default App;
