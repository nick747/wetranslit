import { useState, useEffect } from "react";
import "../App.css";
import dictionary from "../logic/dictionary";
import PhoneticOptions from "./PhoneticOptions";

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
  const [choices, setChoices] = useState([]);
  const [bufferLength, setBufferLength] = useState(2);

  useEffect(() => {
    const inputField = document.getElementById("transliterator");

    const handleInput = (event) => {
      const value = event.target.value;

      if (value.length === 0) {
        setChoices([]);
        return;
      }

      const input = value.slice(-1);

      if (isNaN(input)) {
        let newChoices = [];
        let temp = false;

        for (const [key, valueArray] of Object.entries(dictionary)) {
          temp = false;
          valueArray.forEach((val) => {
            if (val[0] === input.toLowerCase()) {
              temp = true;
            }
          });

          if (temp) {
            if (input.toUpperCase() == input) {
              newChoices.push(key.toUpperCase());
            } else {
              newChoices.push(key);
            }
          }
        }

        // Arrange the choices array so that the base transliteration is in the first place
        for (let i = 0; i < newChoices.length; i++) {
          if (newChoices[i] === findRussian(input.toLowerCase())) {
            if (i === 0) {
              newChoices.splice(i, 1);
            } else {
              newChoices.splice(i, i);
            }
          }
        }

        if (findRussian(input) != input) {
          newChoices.unshift(findRussian(input));
        }

        setChoices(newChoices);
      } else {
        if (!isNaN(input) && isNaN(value[value.length - 2])) {
          setInputValue(value.slice(0, -2) + choices[input - 1]);
        }
      }

      const initValue = value.slice(-bufferLength);
      let buffer = "";

      for (let i = 0; i < initValue.length; i++) {
        buffer += findLatin(initValue[i]);
      }

      if (buffer.length > bufferLength) {
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

      setBufferLength(2);
    };

    inputField.addEventListener("input", handleInput);

    return () => {
      inputField.removeEventListener("input", handleInput);
    };
  }, [choices, bufferLength]);

  const handleCopy = () => {
    const inputField = document.getElementById("transliterator");
    navigator.clipboard.writeText(inputField.value);
  };

  const handleChoiceClick = (choice) => {
    setInputValue((prevValue) => prevValue.slice(0, -1) + choice);
    setBufferLength(1); // Set buffer length to 1 after a choice is selected
    setChoices([]); // Clear choices after selection
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
      <div className="flex flex-col">
        <PhoneticOptions choices={choices} onChoiceClick={handleChoiceClick} />
        <textarea
          id="transliterator"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Type here..."
          className="w-full resize-none h-48 p-4 bg-[#202020] text-white text-base font-normal border-0 shadow-[0_0_10px_rgba(0,0,0,0.25)] outline-none align-text-top"
        />
      </div>
    </div>
  );
};

export default Transliterator;
