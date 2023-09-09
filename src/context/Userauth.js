import { createContext } from "react";
import { useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { setPersistence, browserLocalPersistence } from "firebase/auth";
import { auth } from "../Config/firebase";
import Cookies from "universal-cookie";
import { storageSession } from "../session/sessionStorage";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../Config/firebase";

const userAuthContext = createContext();

export const UserAuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userInfo, setUserInfo] = useState("");
  const [displayName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const storedUserInfo = storageSession.getItem("userInfo");
        setCurrentUser(user);
        if (storedUserInfo ) {
          setUserInfo(storedUserInfo);
         
        } else {
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

      setIsLoading(false); // Set isLoading to false when auth state is known
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

    const userDocRef = doc(db, `users/${currentUser.uid}`);
    await setDoc(userDocRef, newUserInfo, { merge: true });

    setUserInfo(newUserInfo);
    storageSession.setItem("userInfo", newUserInfo);
  };

  // Render a loading indicator while isLoading is true
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <userAuthContext.Provider
      value={{
        displayName,
        setFullName,
        Email,
        setEmail,
        password,
        setPassword,
        currentUser,
        company,
        setCompany,
        userInfo,
        updateUserInfo,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(userAuthContext);
};
