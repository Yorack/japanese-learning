import logo from "./logo.svg";
import "./App.css";
import JapaneseInput from "./components/JapaneseInput";
import JapaneseLesson from "./components/JapaneseLesson";

function App() {
  return (
    <div className="App">
      <div className="flex">
        <JapaneseLesson />
        <JapaneseInput />
      </div>
    </div>
  );
}

export default App;
