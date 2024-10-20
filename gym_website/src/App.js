import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/Navigation/NavigationBar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
