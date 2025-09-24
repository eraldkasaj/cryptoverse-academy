import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Analysis from './pages/Analysis'
import Research from "./pages/Research";


function App() {
  return (

   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
       <Route path="/analysis" element={<Analysis/>}/>
        <Route path="/research" element={<Research/>}/>
    </Routes>
   </Router>

  )
}

export default App
