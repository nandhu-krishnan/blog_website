import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import '../Style/index.css'
import LoginPage from './Login.jsx';
import HomePage from './HomePage.jsx';

function App() {
  return(
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App