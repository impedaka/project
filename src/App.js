import { GlobalStyle } from "./globalStyles";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import StoryPage from "./pages/Stories";
import SarahStory from "./pages/SarahStory";
import ResultPage from "./pages/Result";
function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/stories" element={<StoryPage />} />
          <Route path="/sarahstory" element={<SarahStory />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
