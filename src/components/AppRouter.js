import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import JapaneseLesson from "./JapaneseLesson";
import JapaneseInput from "./JapaneseInput";
import KanjiLesson from "./kanji/KanjiLesson";

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/lessons">
        <JapaneseLesson />
      </Route>
      <Route path="/input">
        <JapaneseInput />
      </Route>
      <Route path="/kanji">
        <KanjiLesson />
      </Route>
      <Route path="/">
        <JapaneseLesson />
      </Route>
    </Switch>
  );
};

export default AppRouter;
