import { useState } from "react";
import KanjiLessonStarted from "./KanjiLessonStarted";
import KanjiLessonEnd from "./KanjiLessonEnd";

const KanjiLesson = () => {
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
      {end && <KanjiLessonEnd courseStat={courseStat} />}
      {!started && (
        <button
          className="my-8 bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={handleStart}
        >
          Start !
        </button>
      )}
      {started && <KanjiLessonStarted callbackEnd={handleEnd} />}
    </div>
  );
};

export default KanjiLesson;
