import { HashRouter, Route, Routes } from "react-router-dom";
import CartPage from "./CartPage/CartPage";
import Home from "./HomePage/Home";
import Mens from "./MensPage/Mens";
import RegisterHere from "./RegisterHerePage/RegisterHere";
import Womens from "./WomensPage/Womens";
function App() {

  return (
<>

    <HashRouter>
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/My_Cart" element={<CartPage />} />
      <Route path="/RegisterHere" element={<RegisterHere />} />
      <Route path="/Mens" element={<Mens />} />
      <Route path="/Womens" element={<Womens />} />

    </Routes>
  </HashRouter>
</>
  );
}

export default App;
