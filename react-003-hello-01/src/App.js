import logo from "./logo.svg";
import "./css/App.css";
import ArithMain from "./comps/ArithMain";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h3>사칙연산</h3>
      <ArithMain />
    </div>
  );
}

export default App;
