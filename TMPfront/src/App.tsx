import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/common/NotFound";


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/"/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
