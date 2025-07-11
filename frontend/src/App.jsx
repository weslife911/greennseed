import { Routes, Route } from "react-router-dom"
import LoginPage from "./pages/auth/LoginPage"
import RegisterPage from "./pages/auth/RegisterPage"
import ResetPasswordPage from "./pages/auth/ResetPasswordPage"
import BlogPage from "./pages/common/BlogPage"
import BlogDetailPage from "./pages/common/BlogDetailPage"
import HomePage from "./pages/guest/HomePage"
import DashboardPage from "./pages/verified/DashboardPage"
import SettingsPage from "./pages/verified/SettingsPage"
import DepositPage from "./pages/verified/DepositPage"
import InvestPage from "./pages/verified/InvestPage"
import WithdrawPage from "./pages/verified/WithdrawPage"
import NotFoundPage from "./pages/fallback/NotFoundPage"
import ReferrersPage from "./pages/verified/ReferrersPage"
import HistoryPage from "./pages/verified/HistoryPage"
import VerifyEmailPage from "./pages/auth/VerifyEmailPage"

function App() {

  return (
    <>

    <Routes>

    {/* Auth Pages */}

    <Route element={<LoginPage/>} path="/login" />
    <Route element={<RegisterPage/>} path="/register" />
    <Route element={<ResetPasswordPage/>} path="/reset-password" />
    <Route element={<VerifyEmailPage/>} path="/verify-email" />

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
    <Route element={<SettingsPage/>} path="/settings" />
    <Route element={<DepositPage/>} path="/depostit" />
    <Route element={<InvestPage/>} path="/invest" />
    <Route element={<WithdrawPage/>} path="/withdraw" />
    <Route element={<ReferrersPage/>} path="/referrers" />
    <Route element={<HistoryPage/>} path="/history" />

    {/* Verified Routes */}


    {/* Fallback Routes */}

    <Route element={<NotFoundPage/>} path="/*" />

    {/* Fallback Routes */}

    </Routes>

    </>
  )
}

export default App
