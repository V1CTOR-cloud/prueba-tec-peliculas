
import { createContext, useState, type ReactNode } from "react";
import { userList } from "@/data/data";
import type { User } from "@/types/UserTypes";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (identifier: string, password: string) => boolean;
  logout: () => void;
  signup: (user: User) => boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);

const AUTH_KEY = "auth_user";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem(AUTH_KEY);
    return stored ? JSON.parse(stored) : null;
  });

  const isAuthenticated = user !== null;

  const login = (identifier: string, password: string): boolean => {
    const found = userList.find(
      (u) => (u.username === identifier || u.email === identifier) && u.passw === password,
    );
    if (!found) return false;
    setUser(found);
    localStorage.setItem(AUTH_KEY, JSON.stringify(found));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(AUTH_KEY);
  };

  const signup = (newUser: User): boolean => {
    const exists = userList.some((u) => u.username === newUser.username);
    if (exists) return false;

    const generateUserName = (fullName: string) => {
      return fullName
    };

    const userName = generateUserName(newUser.fullName); 
    
    const user = {
      ...newUser,
      userName,
    };

    userList.push(user);
    setUser(user);
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    return true;
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout, signup }}
    >
      {children}
    </AuthContext.Provider>
  );
}
