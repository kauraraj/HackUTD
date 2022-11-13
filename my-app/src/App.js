import "./App.css";
import DuringTimePeriod from "./containers/duringTimePeriod/duringTimePeriod";
import CategoryContainer from "./containers/BeforeTimePeriod/categoriesContainer";
import NavBar from "./components/nav/navBar";
import Learning from "./containers/learning/learningFinance";
import piggy from "./piggy.png";
function App() {
  return (
    <>
      <div className="App">
        <NavBar></NavBar>

        <header className="App-header" id="top">
          <img
            src={piggy}
            alt="piggy with wings"
            style={{ height: "500px", width: "500px" }}
          />
          <h1>UniSave</h1>
        </header>
        <div id="before">
          <CategoryContainer></CategoryContainer>
        </div>
        <div id="during">
          <DuringTimePeriod></DuringTimePeriod>
        </div>
        <div id="finance">
          <Learning></Learning>
        </div>
      </div>
    </>
  );
}

export default App;
