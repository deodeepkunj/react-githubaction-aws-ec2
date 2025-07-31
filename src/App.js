import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Deploy react app using <code>GitHub Actions</code> and {""}
          <code>AWS EC2</code>
        </p>
        <p>HAPPY CODING 😎</p>
      </header>
    </div>
  );
}

export default App;
