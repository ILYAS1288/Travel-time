import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Corrected import
import Header from "./components/Header"; // Corrected spelling of "components"
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
