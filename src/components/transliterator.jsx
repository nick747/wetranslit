import { useState, useEffect } from "react";
import "../App.css";
import dictionary from "../logic/dictionary";

const findRussian = (buffer) => {
  const temp = buffer.toLowerCase();
  for (const [key, value] of Object.entries(dictionary)) {
    if (value.includes(temp)) {
      return buffer[0] === buffer[0].toUpperCase() ? key.toUpperCase() : key;
    }
  }
  return buffer;
};

const findLatin = (buffer) => {
  const temp = buffer.toLowerCase();
  for (const [key, value] of Object.entries(dictionary)) {
    if (key === temp) {
      return buffer[0] === buffer[0].toUpperCase()
        ? `${value[0].charAt(0).toUpperCase()}${value[0].slice(1)}`
        : value[0];
    }
  }
  return buffer;
};

const Transliterator = () => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const inputField = document.getElementById("transliterator");

    const handleInput = (event) => {
      const value = event.target.value;
      const initValue = value.slice(-2);
      let buffer = "";

      for (let i = 0; i < initValue.length; i++) {
        buffer += findLatin(initValue[i]);
      }

      if (buffer.length > 2) {
        setInputValue(value.slice(0, -1) + findRussian(buffer.slice(-1)));
      } else {
        const russian = findRussian(buffer);
        if (russian !== buffer) {
          setInputValue(value.slice(0, -buffer.length) + russian);
        } else if (buffer.length === 1) {
          setInputValue(value.slice(0, -1) + findRussian(buffer));
        } else if (buffer.length === 2) {
          setInputValue(value.slice(0, -1) + findRussian(buffer[1]));
        }
      }
    };

    inputField.addEventListener("input", handleInput);

    return () => {
      inputField.removeEventListener("input", handleInput);
    };
  }, []);

  const handleCopy = () => {
    const inputField = document.getElementById("transliterator");
    navigator.clipboard.writeText(inputField.value);
  };

  return (
    <div className="my-8 relative">
      <div
        id="copyBtn"
        className="absolute bottom-0 right-0 m-4 p-2 cursor-pointer rounded-md bg-[#121212]"
        onClick={handleCopy}
      >
        <span className="normal opacity-50">Copy</span>
      </div>
      <textarea
        id="transliterator"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="Type here..."
        className="w-full resize-none h-48 p-4 bg-[#202020] text-white text-base font-normal border-0 shadow-[0_0_10px_rgba(0,0,0,0.25)] outline-none align-text-top"
      />
    </div>
  );
};

export default Transliterator;