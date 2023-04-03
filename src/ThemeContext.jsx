import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebaseApp";

const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  const [data, setData] = useState({
    theme: "",
    authUser: null,
  });
  const toggleTheme = () => {
    setData((prev) => {
      return { ...prev, theme: prev.theme === "" ? "dark" : "" };
    });
  };

  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then(
      (userCredentials) => {
        setData((prev) => ({ ...prev, authUser: userCredentials }));
      }
    );
  };
  const logOutUser = () => {
    signOut(auth).then(() => {
      setData((prev) => ({ ...prev, authUser: null }));
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user
        ? setData((prev) => ({ ...prev, authUser: user }))
        : setData((prev) => ({ ...prev, authUser: null }));
    });
  }, [data.authUser]);

  return (
    <ThemeContext.Provider
      value={{
        ...data,
        logOutUser,
        loginUser,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeContextProvider };
