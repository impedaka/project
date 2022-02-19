import { GlobalStyle } from "./globalStyles";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestPage from "./pages/Test";
function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/test" element={<TestPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
