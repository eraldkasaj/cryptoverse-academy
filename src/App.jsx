import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Analysis from './pages/Analysis'
import Research from "./pages/Research";
import Register from "./components/Register";
import Login from "./components/Login";
import AboutUs from "./pages/AboutUs";


function App() {

  return (

   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
       <Route path="/analysis" element={<Analysis/>}/>
        <Route path="/research" element={<Research/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
         <Route path="/AboutUs" element={<AboutUs/>}/>
    </Routes>
   </Router>

  )
}

export default App
