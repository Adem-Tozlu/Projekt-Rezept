import {Routes, Route,Link } from "react-router-dom";
import RezeptPages from "./view/RezeptPages";
import RezeptDetails from "./view/RezeptDetails";
import CreateRezept from "./view/CreateRezept";
import Layout from "./view/Layout";
import './App.css'


function App() {
  return (
    <div>
      {/* <nav>
      <Link to="/">Home</Link> | <Link to="/create">Create Article</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<RezeptPages />} />
        <Route path="/create" element={<CreateRezept />} />
        <Route path="/rezept/:id" element={<RezeptDetails />} /></Route>
        
      </Routes>
    </div>
  );

  
}

export default App
