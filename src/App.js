import "./App.css";
import Navbar from "./compontens/Navbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./compontens/Pages/Home.js";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
