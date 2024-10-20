import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/Navigation/NavigationBar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Spacer from "./components/Spacer/Spacer";
import JoinSection from "./components/JoinSection/JoinSection";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <About />
      <Spacer />
      <Features />
      <JoinSection />
    </div>
  );
}

export default App;
