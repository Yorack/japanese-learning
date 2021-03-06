import { shuffle } from "lodash";
import ProgressBar from "../progress/ProgressBar";
import { useEffect, useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/outline";
import { toHiragana } from "wanakana";
import useFocus from "../hook/useFocus";

const kanji = [
  { character: "人", japanese: "ひと", meaning: ["personne", "person"] },
  { character: "男", japanese: "おとこ", meaning: ["homme", "man"] },
  { character: "女", japanese: "おんな", meaning: ["femme", "woman"] },
  { character: "子", japanese: "こ", meaning: ["enfant", "child"] },
  { character: "日", japanese: "ひ", meaning: ["soleil", "sun"] },
  { character: "月", japanese: "つき", meaning: ["lune", "moon"] },
  { character: "時", japanese: "とき", meaning: ["temps", "time"] },
  { character: "水", japanese: "みず", meaning: ["eau", "water"] },
  { character: "火", japanese: "ひ", meaning: ["feu", "fire"] },
  { character: "土", japanese: "つち", meaning: ["terre", "earth"] },
  { character: "風", japanese: "かぜ", meaning: ["vent", "wind"] },
  { character: "空", japanese: "そら", meaning: ["ciel", "sky"] },
  { character: "山", japanese: "やま", meaning: ["montagne", "mountain"] },
  { character: "川", japanese: "かわ", meaning: ["riviere", "river"] },
  { character: "木", japanese: "き", meaning: ["arbre", "tree"] },
  { character: "花", japanese: "はな", meaning: ["fleur", "flower"] },
  { character: "雨", japanese: "あめ", meaning: ["pluie", "rain"] },
  { character: "雪", japanese: "ゆき", meaning: ["neige", "snow"] },
  { character: "金", japanese: "かね", meaning: ["argent", "money"] },
  { character: "刀", japanese: "かたな", meaning: ["sabre", "sword"] },
];

const KanjiLessonStarted = ({ callbackEnd }) => {
  const [shuffledKanji, setShuffledKanji] = useState(kanji);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentKanji, setCurrentKanji] = useState(kanji[0]);
  const [japaneseValue, setJapaneseValue] = useState("");
  const [japanese, setJapanese] = useState(false);
  const [meaningValue, setMeaningValue] = useState("");
  const [meaning, setMeaning] = useState(false);
  const [success, setSuccess] = useState(false);
  const [helpUsed, setHelpUsed] = useState(false);
  const [progress, setProgress] = useState(0);
  const [answerNumber, setAnswerNumber] = useState(0);
  const [ref, setFocus] = useFocus();
  const [refInput, setFocusInput] = useFocus();

  useEffect(() => {
    setShuffledKanji(shuffle(kanji));
  }, []);

  useEffect(() => {
    setCurrentKanji(shuffledKanji[questionIndex]);
    setFocusInput();
  }, [shuffledKanji, questionIndex]);

  useEffect(() => {
    if (japanese && meaning) {
      setSuccess(true);
      setFocus(); // since we disable the fields we need to focus the div to access keypress
    }
  }, [japanese, meaning]);

  const handleJapaneseChange = (e) => {
    const value = toHiragana(e.target.value);
    setJapaneseValue(value);
    if (value.toLowerCase() === currentKanji.japanese) {
      setJapanese(true);
    } else {
      setJapanese(false);
    }
  };
  const handleMeaningChange = (e) => {
    const value = e.target.value;
    setMeaningValue(value);

    if (currentKanji.meaning.includes(value.toLowerCase())) {
      setMeaning(true);
    } else {
      setMeaning(false);
    }
  };

  const nextQuestion = () => {
    const newQuestionIndex = questionIndex + 1;
    setQuestionIndex(newQuestionIndex);
    setProgress(Math.floor((newQuestionIndex / kanji.length) * 100));
    setJapanese(false);
    setMeaning(false);
    setSuccess(false);
    setJapaneseValue("");
    setMeaningValue("");
    if (!helpUsed) {
      setAnswerNumber(answerNumber + 1);
    } else {
      setHelpUsed(false);
    }
  };

  const handleUseHelp = () => {
    setHelpUsed(true);

    setJapaneseValue(currentKanji.japanese);
    setMeaningValue(currentKanji.meaning[0]);
    setJapanese(true);
    setMeaning(true);
  };

  const handleEnd = () => {
    if (!helpUsed) {
      setAnswerNumber(answerNumber + 1);
    }
    const numberOfAnswer = !helpUsed ? answerNumber + 1 : answerNumber;
    callbackEnd(kanji.length, numberOfAnswer);
  };

  const handleKeyPress = (event) => {
    if (event.charCode === 13) {
      if (success && questionIndex !== kanji.length - 1) {
        nextQuestion();
      } else if (success && questionIndex === kanji.length - 1) {
        handleEnd();
      }
    }
  };

  return (
    <div>
      <ProgressBar progress={progress} />
      <div
        className="focus:outline-none flex justify-center items-center py-4"
        onKeyPress={handleKeyPress}
        ref={ref}
        tabIndex="-1"
      >
        <h2 className="w-1/3">
          What is this kanji:{" "}
          <span className="text-3xl mx-4">
            {shuffledKanji[questionIndex].character}
          </span>
        </h2>

        <div className="border relative flex w-1/3 flex-wrap items-stretch mb-3 mx-4">
          <input
            tabIndex={1}
            type="text"
            ref={refInput}
            placeholder="Hiragana"
            onChange={handleJapaneseChange}
            disabled={success}
            value={japaneseValue}
            className={`px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative ${
              success ? "bg-gray-100" : "bg-white"
            }  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring pr-10 w-full bigTextInput`}
          />
          {japanese && (
            <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
              <CheckCircleIcon className="text-teal-600" />
            </span>
          )}
        </div>

        <div className="border relative flex w-1/3 flex-wrap items-stretch mb-3">
          <input
            tabIndex={2}
            type="text"
            placeholder="Meaning"
            onChange={handleMeaningChange}
            disabled={success}
            value={meaningValue}
            className={`px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative ${
              success ? "bg-gray-100" : "bg-white"
            } rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring pr-10 w-full bigTextInput`}
          />
          {meaning && (
            <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
              <CheckCircleIcon className="text-teal-600" />
            </span>
          )}
        </div>
      </div>
      {!success && (
        <button
          tabIndex={3}
          className="bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={handleUseHelp}
        >
          Help me !
        </button>
      )}
      {success && questionIndex !== kanji.length - 1 && (
        <button
          tabIndex={3}
          className="bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={nextQuestion}
        >
          Next !
        </button>
      )}
      {success && questionIndex === kanji.length - 1 && (
        <button
          tabIndex={3}
          className="bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={handleEnd}
        >
          End !
        </button>
      )}
    </div>
  );
};

export default KanjiLessonStarted;
