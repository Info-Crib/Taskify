import { createContext } from "react";
import { useContext,useState } from "react";

const userAuthContext = createContext()


export const UserAuthProvider = ({children})=>{
    const [fullName, setFullName] = useState("")
    const [Email, setEmail] = useState("")
    const [password, setPassword] = useState("")

     
    return(
        <userAuthContext.Provider value={{fullName, setFullName, Email, setEmail,password, setPassword}}>
             {children}
        </userAuthContext.Provider>
    )

}


export const useUserAuth=()=>{
    return useContext(userAuthContext)
}