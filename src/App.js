// IMPORT LIBRARIES
import { useEffect, useState } from "react";
import sass from "sass";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// IMPORT REACT PAGES
import HomePage from "./pages/HomePage/HomePage";
import SandboxPage from "./pages/SandboxPage/SandboxPage";
import PromptsPage from "./pages/PromptsPage/PromptsPage";
import TasksPage from "./pages/TasksPage/TasksPage";
import EvalsPage from "./pages/EvalsPage/EvalsPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

// IMPORT REACT COMPONENTS
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// IMPORT STYLES
import "./styles/global.scss";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState("Engineer "); // Penguineer Evalligator

  return (
    <div className="App">
      <BrowserRouter>

        <Header 
            loggedIn={loggedIn}
            role={role} 
          />

        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/home" element={<HomePage />}/>
          <Route path="/sandbox" element={<SandboxPage />}/>
          <Route path="/prompts" element={<PromptsPage />}/>
          <Route path="/tasks" element={<TasksPage />}/>
          <Route path="/evals" element={<EvalsPage />}/>
          <Route path="/about" element={<AboutPage />}/>
          <Route path="*" element={<NotFoundPage />}/>
        </Routes>

        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;