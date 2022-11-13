<<<<<<< Updated upstream
import "./App.css";
import DuringTimePeriod from "./containers/duringTimePeriod/duringTimePeriod";
import CategoryContainer from "./containers/categories/categoriesContainer";
=======
import "./App.css"
import Inputs from "./input"
import "./clicker.js"

>>>>>>> Stashed changes
function App() {
  const [input,Input] = useState(0);
  function takeInput(e) {
    e.preventDefault();
    console.log(e.target[0].value);
  }
  return (
<<<<<<< Updated upstream
    <>
      <div className="App">
        <header className="App-header">
          <h1>Budgeting App</h1>
        </header>
        <CategoryContainer></CategoryContainer>
        <DuringTimePeriod></DuringTimePeriod>
        
      </div>
    </>
=======
    <div className="App">
      <header className="App-header"> 
      Test
      <FormWithoutHookForm >
      </FormWithoutHookForm>
      <form onSubmit={takeInput}>
        <button type="submit">Submit</button>
      </form>
    </div>
>>>>>>> Stashed changes
  );
}

export default App;