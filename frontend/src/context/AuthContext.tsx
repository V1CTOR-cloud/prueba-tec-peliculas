"use client";

import { createContext, useState, type ReactNode } from "react";
import { userList } from "@/data/data";
import type { User } from "@/types/UserTypes";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  register: (user: User) => boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);

const AUTH_KEY = "auth_user";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem(AUTH_KEY);
    return stored ? JSON.parse(stored) : null;
  });

  const isAuthenticated = user !== null;

  const login = (username: string, password: string): boolean => {
    const found = userList.find(
      (u) => u.username === username && u.passw === password,
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

  const register = (newUser: User): boolean => {
    const exists = userList.some((u) => u.username === newUser.username);
    if (exists) return false;
    userList.push(newUser);
    setUser(newUser);
    localStorage.setItem(AUTH_KEY, JSON.stringify(newUser));
    return true;
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
}
