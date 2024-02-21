import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/homepage/homepage";
import Secure from "./pages/securitypage/securitypage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/secure" element={<Secure />} />
    </Routes>
  );
}

export default App;
