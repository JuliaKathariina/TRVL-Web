import "./App.css";
import Navbar from "./compontens/Navbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./compontens/Pages/Home.js";
import Products from "./compontens/Pages/Products";
import SignUp from "./compontens/Pages/Sign-up";
import Dashboard from "./compontens/Pages/Dashboard";
import useToken from "./compontens/useToken";

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <SignUp setToken={setToken} />;
  }

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path="/products" element={<Products />} />
        </Routes>
        <Routes>
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
        <Routes>
          <Route exact path="/dashbaord" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
