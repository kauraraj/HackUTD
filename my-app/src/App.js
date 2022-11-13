import logo from "./logo.svg";
import "./App.css";
import DuringTimePeriod from "./containers/duringTimePeriod/duringTimePeriod";
function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Budgeting App</h1>
        </header>
        <DuringTimePeriod></DuringTimePeriod>
      </div>
    </>
  );
}

export default App;
