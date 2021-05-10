import { shuffle } from "lodash";
import ProgressBar from "../progress/ProgressBar";
import { useEffect, useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/outline";
import { toHiragana } from "wanakana";
type Props = {
  courseState: {
    total: number,
    success: number,
  },
};
const KanjiLessonEnd = ({ courseStat }: Props) => {
  return (
    <div>
      <ProgressBar progress={100} />
      <div>
        <h1 className="px-6 my-6 py-3">Success</h1>

        <p>
          Vous avez répondu a {courseStat.success} question sur{" "}
          {courseStat.total} !
        </p>
      </div>
    </div>
  );
};

export default KanjiLessonEnd;
