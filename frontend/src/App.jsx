import { Routes, Route } from "react-router-dom"
import LoginPage from "./pages/auth/LoginPage"
import RegisterPage from "./pages/auth/RegisterPage"
import ResetPasswordPage from "./pages/auth/ResetPasswordPage"
import BlogPage from "./pages/common/BlogPage"
import BlogDetailPage from "./pages/common/BlogDetailPage"
import HomePage from "./pages/guest/HomePage"
import DashboardPage from "./pages/verified/DashboardPage"

function App() {


  return (
    <>

    <Routes>

    {/* Auth Pages */}

    <Route element={<LoginPage/>} path="/login" />
    <Route element={<RegisterPage/>} path="/register" />
    <Route element={<ResetPasswordPage/>} path="/reset-password" />

    {/* Auth Pages */}

    {/* Common Pages */}

    <Route element={<BlogPage/>} path="/blogs" />
    <Route element={<BlogDetailPage/>} path="/blogs/:id" />

    {/* Common Pages */}

    {/* Guest Routes */}

    <Route element={<HomePage/>} path="/" />

    {/* Guest Routes */}

    {/* Verified Routes */}

    <Route element={<DashboardPage/>} path="/dashboard" />

    {/* Verified Routes */}

    </Routes>

    </>
  )
}

export default App
