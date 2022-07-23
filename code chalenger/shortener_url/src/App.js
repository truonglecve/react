import { useState } from "react";
import "./App.css";
import InputShortener from "./Components/InputShortener";
import LinkResult from "./Components/LinkResult";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <InputShortener setInputValue={setInputValue} />
      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export default App;
