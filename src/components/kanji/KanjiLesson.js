import { useState } from "react";
import KanjiLessonStarted from "./KanjiLessonStarted";
import KanjiLessonEnd from "./KanjiLessonEnd";

const KanjiLesson = () => {
  const kanji = [
    { character: "人", japanese: "ひと", meaning: "Personne" },
    { character: "男", japanese: "おとこ", meaning: "Homme" },
    { character: "女", japanese: "おんな", meaning: "Femme" },
    { character: "子", japanese: "こ", meaning: "Enfant" },
    { character: "日", japanese: "ひ", meaning: "Soleil" },
    { character: "月", japanese: "つき", meaning: "Lune" },
    { character: "時", japanese: "とき", meaning: "Temps" },
    { character: "水", japanese: "みず", meaning: "Eau" },
    { character: "火", japanese: "ひ", meaning: "Feu" },
    { character: "土", japanese: "つち", meaning: "Terre" },
    { character: "風", japanese: "かぜ", meaning: "Vent" },
    { character: "空", japanese: "そら", meaning: "Ciel" },
    { character: "山", japanese: "やま", meaning: "Montagne" },
    { character: "川", japanese: "かわ", meaning: "Rivière" },
    { character: "木", japanese: "き", meaning: "Arbre" },
    { character: "花", japanese: "はな", meaning: "Fleur" },
    { character: "雨", japanese: "あめ", meaning: "Pluie" },
    { character: "雪", japanese: "ゆき", meaning: "Neige" },
    { character: "金", japanese: "かね", meaning: "Argent" },
    { character: "刀", japanese: "かたな", meaning: "Sabre" },
  ];
  const [started, setStarted] = useState(false);
  const [end, setEnd] = useState(false);
  const [courseStat, setCourseStat] = useState({});

  const handleEnd = (kanjiLength, answerNumber) => {
    setEnd(true);
    setStarted(false);
    setCourseStat({
      total: kanjiLength,
      success: answerNumber,
    });
  };

  const handleStart = () => {
    setEnd(false);
    setStarted(true);
  };

  return (
    <div className="flex-2 box-content w-full p-4 rounded-md m-4 bg-white shadow-lg">
      {!started && (
        <button
          className="bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={handleStart}
        >
          Start !
        </button>
      )}
      {started && <KanjiLessonStarted callbackEnd={handleEnd} />}
      {end && <KanjiLessonEnd courseStat={courseStat} />}
    </div>
  );
};

export default KanjiLesson;
