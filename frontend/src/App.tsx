import { Route, Routes } from "react-router-dom";
import "./App.css";

import MainLayout from "@/Layout/MainLayout";
import AuthLayout from "@/Layout/AuthLayout";

import Home from "@/pages/Home";
import Movies from "@/pages/Movies";
import Series from "@/pages/Series";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Categories from "@/pages/Categories";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Series" element={<Series />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
