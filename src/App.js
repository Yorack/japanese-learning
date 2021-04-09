import logo from './logo.svg';
import './App.css';
import JapaneseInput from "./components/JapaneseInput";

function App() {
  return (
    <div className="App">
      <div className="flex">
        <div className="flex-1 box-content h-64 w-64 p-4 border-4 border-green-400 rounded-md m-4">

          Coming soon
        </div>
        <JapaneseInput />
      </div>
    </div>
  );
}

export default App;
