import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Home from "./containers/Home.jsx";
import About from "./containers/About.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <Router>
      <NavigationBar />
      <Home />
      <About />
    </Router>
  );
}

export default App;
