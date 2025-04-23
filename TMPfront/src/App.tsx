import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/common/NotFound";
import LoginPage from "./pages/login";
import SignUpForm from "./pages/signup";
import LandingPage from "./pages/LandingPage";
import UserHome from "./pages/User/UserHome";
import Privet from "./protected/Privet";
import ResetPassword from "./pages/ResetPassword";
import NewPasswordReset from "./pages/NewPasswordReset";



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* befor log in  */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/passworedreset" element={<ResetPassword />} />
          <Route path="/changepasswored" element={<NewPasswordReset />} />
          {/* after log in  */}
          <Route path="/user" element={<Privet Componnet={UserHome} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
