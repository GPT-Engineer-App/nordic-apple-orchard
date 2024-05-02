import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import OurApples from "./pages/OurApples.jsx";
import Gallery from "./pages/Gallery.jsx";
import ContactUs from "./pages/ContactUs.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-apples" element={<OurApples />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
