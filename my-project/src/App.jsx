import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Corrected import
import Header from "./components/Header"; 
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Bookpage from "./pages/Bookpage";
import CheckSchedulePage from "./pages/CheckSchedulePage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookpage" element={<Bookpage />} />

        <Route path="/check-schedule" element={<CheckSchedulePage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
