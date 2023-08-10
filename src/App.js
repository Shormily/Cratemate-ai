import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/Home/About/About';
import Login from './Pages/Home/Login/Login';
import Service from './Pages/Home/Service/Service';


function App() {
  return (
   <>
 
  <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
    
  
        {/* <Route path="/contact" element={  <Contact /> }/> */}
     
        <Route path="/product" element={<Service />  } />
        <Route path="/login" element={<Login />} />
      
       
      </Routes>
   </>
  );
}

export default App;
