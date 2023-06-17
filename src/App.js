import "../src/assets/css/style.css";
import Header from "./componets/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./componets/Home";

import CartSinglePage from "./componets/CartSinglePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<CartSinglePage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
