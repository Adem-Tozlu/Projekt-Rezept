import {Routes, Route} from "react-router-dom";

import HomePages from "./view/HomePages";
import RezeptDetails from "./view/RezeptDetails";
import CreateRezept from "./view/CreateRezept";
import Layout from "./view/Layout";
import './App.css'
import MyRezept from "./view/MyRezept";


function App() {
  return (
    <div>
     
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<HomePages />} />
        <Route path="/create" element={<CreateRezept />} />
        <Route path="/rezept/:id" element={<RezeptDetails />} />
        <Route path="/myrezept" element={<MyRezept/>}/></Route>
        
      </Routes>
      
    </div>
  );

  
}

export default App
