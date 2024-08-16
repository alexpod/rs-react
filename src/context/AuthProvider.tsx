import { createContext, useState, useContext } from "react";

type AuthProviderProps = {
  children: React.ReactNode
}
type UseAuthType = {
  user: string | null;
  signin: (newUser: string, callback: () => void) => void;
  signout: (callback: () => void) => void;
}

const AuthContext = createContext<UseAuthType>({
  user: null,
  signin: () => {},
  signout: () => {}
});

const useAuth = (): UseAuthType => {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  
  const [user, setUser] = useState(() => localStorage.getItem('user') || null);

  const signin = (newUser: string, callback: () => void) => {
    setUser(newUser);
    localStorage.setItem('user', newUser)
    callback();
  }

  const signout = (callback: () => void) => {
    setUser(null);
    localStorage.removeItem('user')
    callback();
  }

  const value = {
    user,
    signin,
    signout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export { useAuth, AuthProvider }