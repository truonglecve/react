import { useState } from "react";

const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  };

  return (
    <div className="inputContainer">
      <h1>Link Shortener</h1>
      <div>
        <p>Enter a Link:</p>
        <input
          type="text"
          placeholder="example.com"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleClick}>Submit</button>
      </div>
    </div>
  );
};

export default InputShortener;
