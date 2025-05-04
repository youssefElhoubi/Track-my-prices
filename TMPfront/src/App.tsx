import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/common/NotFound";
import LoginPage from "./pages/login";
import SignUpForm from "./pages/signup";
import LandingPage from "./pages/LandingPage";
import UserHome from "./pages/User/UserHome";
import TraceNewProduct from "./pages/User/TraceNewProduct";
import Privet from "./protected/Privet";
import ResetPassword from "./pages/ResetPassword";
import NewPasswordReset from "./pages/NewPasswordReset";
import ProductDetailPage from "./pages/User/ProducrDetailes";
import ProductTracker from "./pages/User/Myprodcuts";
import MyWatchlist from "./pages/User/MyWatchlist";
import AccountInformation from "./pages/User/AccountInformation";
import Dashboard from "./pages/Admin/dashboard";



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
          <Route path="/changepasswored/:id" element={<NewPasswordReset />} />
          {/* after log in  */}
          <Route path="/user" element={<Privet Componnet={UserHome} />} />
          <Route path="/user/product/add" element={<Privet Componnet={TraceNewProduct} />} />
          <Route path="/user/product/:id" element={<Privet Componnet={ProductDetailPage} />} />
          <Route path="/user/products" element={<Privet Componnet={ProductTracker} />} />
          <Route path="/wacthlist" element={<Privet Componnet={MyWatchlist }/>} />
          <Route path="/use/acount" element={<Privet Componnet={AccountInformation }/>} />
          <Route path="/test" element={<Dashboard/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
