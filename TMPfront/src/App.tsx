import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/common/NotFound";
import LoginPage from "./pages/login";


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
