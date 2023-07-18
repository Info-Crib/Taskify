import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import Task from "./Pages/Task";
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
          <Route path= "/Project" element={ <Project />} />
          <Route path= "/Profile" element={ <Profile />} />
          <Route path= "/Task" element={ <Task />} />

        </Routes>
      </Router>
    
    </>
   );
}
 
export default App;
