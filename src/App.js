import Home from "./components/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/promo/" element={<Home />} />
          {/* <Route path="/news/guide/:article" element={<ArticleGuidePage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
