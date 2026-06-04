import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import MainLayout from "@/Layout/MainLayout";
import AuthLayout from "@/Layout/AuthLayout";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";

import Home from "@/pages/Home";
import Movies from "@/pages/Movies";
import Series from "@/pages/Series";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Categories from "@/pages/Categories";
import { useAuth } from "@/hooks/useAuth";

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={isAuthenticated ? "/home" : "/login"} replace />}
      />

      <Route
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/home" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
      </Route>

      <Route
        element={
          isAuthenticated ? <Navigate to="/home" replace /> : <AuthLayout />
        }
      >
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route
        path="*"
        element={<Navigate to={isAuthenticated ? "/home" : "/login"} replace />}
      />
    </Routes>
  );
}

export default App;
