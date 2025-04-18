import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/common/NotFound";
import LoginPage from "./pages/login";
import SignUpForm from "./pages/signup"; 
import LandingPage from "./pages/landingPage";



function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignUpForm/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
