import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Corrected import
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Bookpage from "./pages/Bookpage";
import CheckSchedulePage from "./pages/CheckSchedulePage";
import Category from "./pages/Category";
import Aboutus from "./pages/Aboutus";
import Blog from "./pages/Blog";
import View from "./pages/View";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookpage" element={<Bookpage />} />
        <Route path="/check-schedule" element={<CheckSchedulePage />} />
        <Route path="/category" element={<Category />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/view-all" element={<View />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
