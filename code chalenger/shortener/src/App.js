import { useState } from "react";
import "./App.css";
import InputValue from "./Components/InputValue";
import Result from "./Components/Result";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <h1>
        The <b>privacy-friendly</b> URL Shortener
      </h1>
      <InputValue setInputValue={setInputValue} />
      <Result inputValue={inputValue} />
    </div>
  );
}

export default App;
