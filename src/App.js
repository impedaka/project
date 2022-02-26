import { GlobalStyle } from "./globalStyles";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestPage from "./pages/Test";
import Footer from "./components/Footer";
import StoryPage from "./pages/Stories";
import SarahStory from "./pages/SarahStory";
function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/test" element={<TestPage />} />
          <Route path="/stories" element={<StoryPage />} />
          <Route path="/sarahstory" element={<SarahStory />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
