
import { createContext, useContext, useState, ReactNode } from "react";

interface PasswordContextType {
  isAuthenticated: boolean;
  authenticate: (password: string) => boolean;
  logout: () => void;
}

const PasswordContext = createContext<PasswordContextType | undefined>(undefined);

export const PasswordProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // This would typically be stored securely, not hardcoded
  const correctPassword = "YourNickname+Apology";
  
  const authenticate = (password: string) => {
    const isValid = password === correctPassword;
    setIsAuthenticated(isValid);
    return isValid;
  };
  
  const logout = () => {
    setIsAuthenticated(false);
  };
  
  return (
    <PasswordContext.Provider value={{ isAuthenticated, authenticate, logout }}>
      {children}
    </PasswordContext.Provider>
  );
};

export const usePassword = () => {
  const context = useContext(PasswordContext);
  if (context === undefined) {
    throw new Error("usePassword must be used within a PasswordProvider");
  }
  return context;
};
