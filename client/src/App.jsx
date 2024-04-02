import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/landingPage/LandingPage';
import AboutPage from './pages/aboutPage/AboutPage';

function App() {

  return (
   <>
   <BrowserRouter>
   <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/about' element={<AboutPage/>} />
   </Routes>
   </BrowserRouter>
   
   
   </>
  )
}

export default App
