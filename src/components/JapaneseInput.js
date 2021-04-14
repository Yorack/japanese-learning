import { useEffect, useState } from "react";
import { toHiragana, toKatakana } from "wanakana";
import { DocumentDuplicateIcon } from "@heroicons/react/outline";
import Button from "./button/CopyButton";
import CopyButton from "./button/CopyButton";

const JapaneseInput = () => {
  const [inputValue, setInputValue] = useState("Japanese");
  const [hiraganaValue, setHiraganaValue] = useState();
  const [katakanaValue, setKatakanaValue] = useState();

  useEffect(() => {
    setHiraganaValue(toHiragana(inputValue));
    setKatakanaValue(toKatakana(inputValue));
  }, []);

  const handleChange = (e) => {
    console.log(e.target);
    console.log(e.target.value);
    setInputValue(e.target.value);
    setHiraganaValue(toHiragana(e.target.value));
    setKatakanaValue(toKatakana(e.target.value));
  };

  const handleClick = (value) => {
    navigator.clipboard.writeText(value);
  };

  return (
    <div className="flex-2 box-content h-64 w-64 p-4 rounded-md m-4 bg-white shadow-lg">
      <h1 className="text-lg leading-6 font-medium text-black mb-4 text-purple-600 uppercase ">
        Romanji transformer
      </h1>
      <input
        type="text"
        onChange={handleChange}
        value={inputValue}
        placeholder="type your romanji"
        className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2"
      />

      <div className="text-3xl my-4 text-left">
        {hiraganaValue && [
          <div className="flex">
            <span className="flex-2 flex-grow">{hiraganaValue}</span>
            <span className="flex">
              <CopyButton
                text={hiraganaValue}
                onClick={() => handleClick(hiraganaValue)}
              />
            </span>
          </div>,
          <div className="text-sm text-gray-500">hiragana</div>,
        ]}
      </div>
      <div className="text-3xl my-4 text-left">
        {katakanaValue && [
          <div className="flex">
            <span className="flex-2 flex-grow">{katakanaValue}</span>
            <span className="flex">
              <CopyButton
                text={katakanaValue}
                onClick={() => handleClick(katakanaValue)}
              />
            </span>
          </div>,
          <div className="text-sm text-gray-500">Katakana</div>,
        ]}
      </div>
    </div>
  );
};

export default JapaneseInput;
