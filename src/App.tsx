import { BrowserRouter, Route, Routes } from "react-router-dom";

// components
import { Header } from "./components/Header";
import { All } from "./components/All";
import { Clients } from "./components/Clients";
import { Personal } from "./components/Personal";
import { Media } from "./components/Media";
import { Footer } from "./components/Footer";

import "./index.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/media" element={<Media />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
