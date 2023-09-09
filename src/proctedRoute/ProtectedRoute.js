import { Navigate } from "react-router-dom"
import { useUserAuth } from "../context/Userauth";

const ProtectedRoute = ({children}) => {
  const { currentUser} = useUserAuth()


  console.log(currentUser)
    if(!currentUser ){
         return  <Navigate to="/login" replace/>
        } else {
          console.log('available');
          return children;
        }
}

export default ProtectedRoute;
