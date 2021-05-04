import "./App.css";
import Menu from "./components/Menu";
import AppRouter from "./components/AppRouter";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />

        <div className="flex">
          <AppRouter />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
