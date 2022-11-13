import "./App.css";
import DuringTimePeriod from "./containers/duringTimePeriod/duringTimePeriod";
import CategoryContainer from "./containers/categories/categoriesContainer";
import NavBar from "./components/nav/navBar";
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
      </div>
    </>
  );
}

export default App;
