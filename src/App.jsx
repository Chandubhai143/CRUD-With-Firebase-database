import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './Home';
import Input from './Input';
import Show from './Show';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div>
        <nav className="bg-success-subtle text-center p-3">
          <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/input">Input</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/show">Show</Link>
          
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/input" element={<Input/>} />
          <Route path="/Show" element={<Show />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



