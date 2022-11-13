import "./App.css";
import DuringTimePeriod from "./containers/duringTimePeriod/duringTimePeriod";
import CategoryContainer from "./containers/BeforeTimePeriod/categoriesContainer";
import NavBar from "./components/nav/navBar";
import Learning from "./containers/learning/learningFinance";
function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Budgeting App</h1>
        </header>
        <NavBar></NavBar>
        <CategoryContainer></CategoryContainer>
        <DuringTimePeriod></DuringTimePeriod>
        <Learning></Learning>
      </div>
    </>
  );
}

export default App;
