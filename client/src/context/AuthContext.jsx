import React, { createContext, useState } from "react";

export const AuthProvider = createContext();
const AuthContext = ({ children }) => {
  const [Auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  return (
    <AuthProvider.Provider value={{ Auth, setAuth }}>
      {children}
    </AuthProvider.Provider>
  );
};

export default AuthContext;
