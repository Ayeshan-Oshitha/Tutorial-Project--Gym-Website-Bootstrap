import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/Navigation/NavigationBar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
    </div>
  );
}

export default App;
