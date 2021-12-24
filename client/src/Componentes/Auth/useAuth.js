import React from 'react'

const AuthContext = React.createContext();

export function useAuth() {
  return React.useContext(AuthContext);
}
var auhtedS = sessionStorage.getItem('authed') 
console.log("auhtedS", auhtedS)

export function AuthProvider({ children }) {
  const [authed, setAuthed] = React.useState(
    () => auhtedS !== null && auhtedS !== "false"
  );

  React.useEffect(() => {
    sessionStorage.setItem('authed', JSON.stringify(authed));
  }, [authed]);
  
  const value = {
    authed,
    login() {
      return new Promise((res) => {
        setAuthed(true);
        console.log("entro en la auth")
        res();
      });
    },
    logout() {
      return new Promise((res) => {
        setAuthed(false);
        res();
      });
    }
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}