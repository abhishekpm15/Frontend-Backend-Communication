import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import DocsPage from "./pages/DocsPage";
import AboutPage from "./pages/AboutPage";
import DataPage from "./pages/DataPage";
import EditPage from "./pages/EditPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/documentation" element={<DocsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/data" element={<DataPage />} />
          <Route path="/edit" element={<EditPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
