import "./App.scss";
import Nav from "./components/Nav";
import Main from "./components/Main";

function App() {
  return (
    <div className="wrapper">
      <div className="App">
        <Nav />
        <Main />
      </div>
      <div className="music-control">music control</div>
    </div>
  );
}

export default App;
