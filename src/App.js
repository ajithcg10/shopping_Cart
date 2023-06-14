import "../src/assets/css/style.css";
import Header from "./componets/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./componets/Home";
import Cart from "./componets/Cart";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
