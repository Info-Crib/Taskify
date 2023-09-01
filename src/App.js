import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import Prof from "./Pages/Prof";
import Task from "./Pages/Task";
import ProtectedRoute from "./proctedRoute/ProtectedRoute";
const App = () => {

  return ( 
    <>
      <Router>
        <Routes>
          <Route path= "/" element={ <Home />} />
          <Route path= "/login" element={ <Login />} />
          <Route path= "/register" element={ <Register />} />
          <Route path= "/about" element={ <About />} />
          <Route path= "/dashboard" element={ 
            <Dashboard />
       } />
          <Route path= "/project" element={ 
            <Project />
          } />
          <Route path= "/profile" element={ <Profile /> } />
          <Route path= "/prof" element={
            <Prof />
          } />
          <Route path= "/task" element={
            <Task />
           } />

        </Routes>
      </Router>
    
    </>
   );
}
 
export default App;
