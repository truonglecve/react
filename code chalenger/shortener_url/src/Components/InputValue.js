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
      <div className="domain">
        <p>Short domain:</p>
        <input
          type="radio"
          id="domain1"
          name="domain"
          value="shrtco.de"
          defaultChecked
        ></input>
        <label for="domain1">shrtco.de</label>
        <input type="radio" id="domain2" name="domain" value="9qr.de"></input>
        <label for="domain2">9qr.de</label>
        <input
          type="radio"
          id="domain3"
          name="domain"
          value="shiny.link"
        ></input>
        <label for="domain3">shiny.link</label>
      </div>
    </div>
  );
};

export default InputShortener;
