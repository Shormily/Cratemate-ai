import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/Home/About/About";
import Login from "./Pages/Home/Login/Login";
import Sign from "./Pages/Home/Sign/Sign";
import Product from "./Pages/Home/Product/Product";
import Serv from "./Pages/Home/Service-Page/Serv";
import Freelancer from "./Pages/Home/Freelancer/Freelancer";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/freelancer" element={  <Freelancer /> }/>

        <Route path="/product" element={<Product />} />
        <Route path="/service" element={<Serv />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
      </Routes>
      <ScrollToTop smooth />
    </>
  );
}

export default App;
