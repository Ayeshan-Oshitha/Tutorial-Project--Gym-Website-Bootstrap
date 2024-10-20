import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/Navigation/NavigationBar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Spacer from "./components/Spacer/Spacer";
import JoinSection from "./components/JoinSection/JoinSection";
import Plans from "./components/Plans/Plans";
import TrainSection from "./components/TrainSection/TrainSection";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <About />
      <Spacer />
      <Features />
      <JoinSection />
      <Plans />
      <TrainSection />
      <Contact />
      <Spacer />
      <Footer />
    </div>
  );
}

export default App;
