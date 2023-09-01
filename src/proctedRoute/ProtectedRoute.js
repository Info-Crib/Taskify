import { Navigate } from "react-router-dom"
import { useUserAuth } from "../context/Userauth"

const ProtectedRoute = ({children}) => {
   
    let {currentUser} = useUserAuth()
  
    if(!currentUser){
         return  <Navigate to="/login"/>
        }
  return children;
}

export default ProtectedRoute;
