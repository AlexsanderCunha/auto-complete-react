import "./App.css";
import Autocomplete from "./components/AutoComplete";

function App() {
  const ProgLang = ["JavaScript", "Java", "Node Js", "ReactJs"];
  return (
    <div className="container">
      <Autocomplete lang={ProgLang} />
    </div>
  );
}

export default App;
