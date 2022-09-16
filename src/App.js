import TvMaze from "./components/TV_Maze";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import SignInForm from "./components/SignInForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container my-3">
          <Routes>
            {/* /users --> Component 1
        /users/home --> Component 2 */}
            <Route exact path="/about" element={<About />} />
            <Route exact path="/sign-in" element={<SignInForm />} />
            <Route exact path="/" element={<TvMaze />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
