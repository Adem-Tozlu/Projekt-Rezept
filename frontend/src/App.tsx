import {Routes, Route, Link } from "react-router-dom";
import RezeptPages from "./view/RezeptPages";
import RezeptDetails from "./view/RezeptDetails";
import CreateRezept from "./view/CreateRezept";
import './App.css'

function App() {
  return (
    <div>
      <nav>
      <Link to="/">Home</Link> | <Link to="/create">Create Article</Link>
      </nav>
      <Routes>
        <Route path="/" element={<RezeptPages />} />
        <Route path="/create" element={<CreateRezept />} />
        <Route path="/rezept/:id" element={<RezeptDetails />} />
        
      </Routes>
    </div>
  );

  
}

export default App
