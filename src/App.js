import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import About from "./Pages/About";
import Dashboard from "./Pages/Dashboard";
const App = () => {
  return ( 
    <>
      <Router>
        <Routes>
          <Route path= "/" element={ <Home />} />
          <Route path= "/login" element={ <Login />} />
          <Route path= "/register" element={ <Register />} />
          <Route path= "/about" element={ <About />} />
          <Route path= "/dashboard" element={ <Dashboard />} />

        </Routes>
      </Router>
    
    </>
   );
}
 
export default App;
