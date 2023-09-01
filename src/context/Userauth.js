import { createContext } from "react";
import { useContext,useState,useEffect  } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { setPersistence, browserLocalPersistence } from "firebase/auth";
import { auth } from "../Config/firebase";
import Cookies from "universal-cookie";
import { storageSession } from "../session/sessionStorage";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../Config/firebase";
const userAuthContext = createContext()


export const UserAuthProvider = ({children})=>{
  const [currentUser, setCurrentUser] = useState(null);
  const [userInfo, setUserInfo] = useState("");
    const [displayName, setFullName] = useState("")
    const [Email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [company, setCompany] = useState("")

    // const Userinfo = {
    //   displayName: displayName,
    //   Email: Email,
    //   company: company,
    // }

     
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (user) {
          setCurrentUser(user);
          // Check if user data is in session storage, if not, fetch it from Firestore
          const storedUserInfo = storageSession.getItem("userInfo");
          if (storedUserInfo) {
            setUserInfo(storedUserInfo);
          } else {
            // Fetch user info from Firestore and store it in state and session storage
            const userDocRef = doc(db, `users/${user.uid}`);
            const docSnapshot = await getDoc(userDocRef);
            if (docSnapshot.exists()) {
              const userData = docSnapshot.data();
              setUserInfo(userData);
              storageSession.setItem("userInfo", userData);
            }
          }
        } else {
          setCurrentUser(null);
          setUserInfo("");
          storageSession.removeItem("userInfo");
        }
      });
  
      // Return a cleanup function to remove the observer
      return () => {
        unsubscribe();
      };
    }, []);

    const updateUserInfo = async (newUserInfo) => {
      if (!currentUser) {
        return; // Not logged in
      }
  
      // Update user info in Firestore
      const userDocRef = doc(db, `users/${currentUser.uid}`);
      await setDoc(userDocRef, newUserInfo, { merge: true });
  
      // Update user info in state and session storage
      setUserInfo(newUserInfo);
      storageSession.setItem("userInfo", newUserInfo);
    };
     
    return(
        <userAuthContext.Provider value={{displayName, setFullName, Email, setEmail,password, setPassword,currentUser,company, setCompany,userInfo,updateUserInfo}}>
             {children}
        </userAuthContext.Provider>
    )

}


export const useUserAuth=()=>{
    return useContext(userAuthContext)
}