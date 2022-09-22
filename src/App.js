import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";
export default function App() {
  return (
    <div className="App">
      <Router>
        <div className="backgrounds">
          <Navbar />
          <Routes>
            <Route path="/sss/:name" element={<News />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
