import "./App.css";
// import Inputs from "./input";
import "./clicker.js";
import { FormWithoutHookForm } from "./clicker.js";

function App() {
  // const [input, Input] = useState(0);
  function takeInput(e) {
    e.preventDefault();
    console.log(e.target[0].value);
  }
  return (
    <div className="App">
      {/* <header className="App-header">  */}
      Test
      <FormWithoutHookForm></FormWithoutHookForm>
      <form onSubmit={takeInput}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
