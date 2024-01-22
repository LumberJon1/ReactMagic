import Spell from '../src/components/Spell'
import './App.css';
import "./styles/tailwind.css";

function App() {
  return (
    <div className="App h-full flex flex-col items-center">
      <Spell
        className="w-full h-1/3"
      >
        The Spell Textbox
      </Spell>
    </div>
  );
}

export default App;
