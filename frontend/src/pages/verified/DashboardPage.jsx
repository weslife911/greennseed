
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
import { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Helmet } from "react-helmet"
import Loader from '../../components/Loader/Loader';

function DashboardPage() {

  const {user, authTokens} = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authTokens) {
      navigate('/login');
    }
  }, [authTokens, navigate]);

  if (!authTokens) {
    <Loader/>
  }

  return (
    <>
    <Helmet>
      <title>GreennSeed App</title>
    </Helmet>
    <Header/>
  <div id="toaster-container"></div>
  <div className="flex-grow bg-gray-700">
    <div className="max-w-7xl mx-auto shadow-lg rounded-lg overflow-hidden">
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-950 via-black/80 to-emerald-950/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          {/* Welcome Section with floating design */}
          <div className="mb-10 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent rounded-2xl blur-3xl -z-10" />
            <h1 className="text-4xl font-bold text-gray-100 tracking-tight mb-2">
              Welcome back,{" "}
              <span className="text-green-400">
                {user.full_name}
              </span>
            </h1>
          </div>
          {/* Primary Balance Card */}
          <div className="group relative mb-10">
            {/* Main card */}
            <div
              className="relative flex flex-col bg-gray-700 p-6 md:p-8 rounded-xl 
          shadow-[0_4px_20px_-4px_rgba(34,197,94,0.2)] border-l-4 border-green-500 w-full
          hover:shadow-[0_8px_30px_-6px_rgba(34,197,94,0.3)] transition-all duration-300"
            >
              {/* Top Section */}
              <div className="flex justify-between items-start mb-6">
                {/* Left content */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <i className="fas fa-wallet h-5 w-5 text-green-500" />
                    <p className="text-gray-300 font-medium">Total Balance</p>
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <p className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                      100.00
                    </p>
                    <span className="text-sm md:text-base font-medium text-gray-400">
                      frs CFA
                    </span>
                  </div>
                </div>
                {/* Stats Icon */}
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <i className="fas fa-chart-line mr-1" />
                    Active
                  </span>
                </div>
              </div>
              {/* Bottom Section - Buttons */}
              <div className="flex flex-row gap-3 sm:gap-4">
                {/* Withdraw Button */}
                <a
                  href="https://greennseed.com/withdraw/main/balance"
                  className="group/button flex-1"
                >
                  <button
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-green-500 text-white font-medium
                       shadow-[0_4px_12px_-2px_rgba(34,197,94,0.3)] hover:shadow-[0_6px_16px_-3px_rgba(34,197,94,0.5)]
                       hover:bg-green-600 transition-all duration-300"
                  >
                    <i className="fas fa-arrow-down text-sm md:text-base mr-2" />
                    <span className="">Withdraw</span>
                  </button>
                </a>
                {/* History Button */}
                <a
                  href="https://greennseed.com/history"
                  className="group/button flex-1"
                >
                  <button
                    className="w-full inline-flex bg-gray-300 items-center justify-center px-4 py-2.5 rounded-lg bg-gray-100 text-gray-700 font-medium
                       shadow-[0_4px_12px_-2px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_16px_-3px_rgba(0,0,0,0.15)]
                       hover:bg-gray-400 transition-all duration-300"
                  >
                    <i className="fas fa-clock text-sm md:text-base mr-2" />
                    <span className="">History</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
            <div className="group relative">
              {/* Main card */}
              <div
                className="relative flex items-center justify-between bg-gray-800  p-4 md:p-6 rounded-xl 
                      shadow-[0_4px_20px_-4px_rgba(147,51,234,0.1)] border-l-4 border-rose-500 w-full
                      hover:shadow-[0_8px_30px_-6px_rgba(147,51,234,0.2)] transition-all duration-300"
              >
                {/* Left content */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    {/* Icon */}
                    <i className="fas fa-wallet h-4 w-4 md:h-5 md:w-5 text-rose-500" />
                    <p className="text-sm md:text-base text-gray-200 font-medium">
                      Main Account Balance
                    </p>
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <p className="text-xl md:text-3xl font-bold bg-gradient-to-r from-rose-500 to-rose-400 bg-clip-text text-transparent">
                      100.00
                    </p>
                    <span className="text-xs md:text-sm font-medium text-gray-500">
                      frs CFA
                    </span>
                  </div>
                </div>
                {/* Right content - Button with integrated icon */}
                <a
                  href="https://greennseed.com/withdraw/main/balance"
                  className="group/button"
                >
                  <button
                    className="inline-flex items-center rounded-lg bg-rose-500 text-white font-medium
                               shadow-[0_4px_12px_-2px_rgba(147,51,234,0.3)] hover:shadow-[0_6px_16px_-3px_rgba(147,51,234,0.5)]
                               hover:bg-rose-400 transition-all duration-300
                               p-2 md:px-5 md:py-2.5"
                  >
                    <span className="hidden md:inline">Withdraw</span>
                    <i className="fas fa-arrow-right md:ml-2 text-sm md:text-base" />
                  </button>
                </a>
              </div>
            </div>
            <div className="group relative">
              {/* Main card */}
              <div
                className="relative flex items-center justify-between bg-gray-800  p-4 md:p-6 rounded-xl 
                      shadow-[0_4px_20px_-4px_rgba(147,51,234,0.1)] border-l-4 border-green-500 w-full
                      hover:shadow-[0_8px_30px_-6px_rgba(147,51,234,0.2)] transition-all duration-300"
              >
                {/* Left content */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    {/* Icon */}
                    <i className="fas fa-gift h-4 w-4 md:h-5 md:w-5 text-green-500" />
                    <p className="text-sm md:text-base text-gray-200 font-medium">
                      Commission Wallet
                    </p>
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <p className="text-xl md:text-3xl font-bold bg-gradient-to-r from-green-500 to-green-400 bg-clip-text text-transparent">
                      0.00
                    </p>
                    <span className="text-xs md:text-sm font-medium text-gray-500">
                      frs CFA
                    </span>
                  </div>
                </div>
                {/* Right content - Button with integrated icon */}
                <a
                  href="https://greennseed.com/withdraw"
                  className="group/button"
                >
                  <button
                    className="inline-flex items-center rounded-lg bg-green-500 text-white font-medium
                               shadow-[0_4px_12px_-2px_rgba(147,51,234,0.3)] hover:shadow-[0_6px_16px_-3px_rgba(147,51,234,0.5)]
                               hover:bg-green-400 transition-all duration-300
                               p-2 md:px-5 md:py-2.5"
                  >
                    <span className="hidden md:inline">Withdraw</span>
                    <i className="fas fa-arrow-right md:ml-2 text-sm md:text-base" />
                  </button>
                </a>
              </div>
            </div>
            <div className="group relative">
              {/* Main card */}
              <div
                className="relative flex items-center justify-between bg-gray-800  p-4 md:p-6 rounded-xl 
                      shadow-[0_4px_20px_-4px_rgba(147,51,234,0.1)] border-l-4 border-emerald-500 w-full
                      hover:shadow-[0_8px_30px_-6px_rgba(147,51,234,0.2)] transition-all duration-300"
              >
                {/* Left content */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    {/* Icon */}
                    <i className="fas fa-chart-line h-4 w-4 md:h-5 md:w-5 text-rose-500" />
                    <p className="text-sm md:text-base text-gray-200 font-medium">
                      Total Invested
                    </p>
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <p className="text-xl md:text-3xl font-bold bg-gradient-to-r from-rose-500 to-green-500 bg-clip-text text-transparent">
                      2,100.00
                    </p>
                    <span className="text-xs md:text-sm font-medium text-gray-500">
                      frs CFA
                    </span>
                  </div>
                </div>
                {/* Right content - Button with integrated icon */}
                <a
                  href="https://greennseed.com/history"
                  className="group/button"
                >
                  <button
                    className="inline-flex items-center rounded-lg bg-rose-500 text-white font-medium
                               shadow-[0_4px_12px_-2px_rgba(147,51,234,0.3)] hover:shadow-[0_6px_16px_-3px_rgba(147,51,234,0.5)]
                               hover:bg-green-500 transition-all duration-300
                               p-2 md:px-5 md:py-2.5"
                  >
                    <span className="hidden md:inline">Transactions</span>
                    <i className="fas fa-arrow-right md:ml-2 text-sm md:text-base" />
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Investment Overview with glass effect */}
          {/* Investment Overview Section */}
          <div className="relative mb-10">
            {/* Main Container */}
            <div className="bg-gray-700  rounded-xl p-6 md:p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border-l-4 border-rose-500">
              {/* Header */}
              <div className="flex items-center mb-6">
                <i className="fas fa-chart-bar text-rose-500 text-xl mr-3" />
                <h2 className="text-xl md:text-2xl font-bold text-gray-300">
                  Investment Overview
                </h2>
              </div>
              {/* Cards Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                <div className="group relative">
                  {/* Main card */}
                  <div
                    className="relative flex items-center justify-between bg-gray-800 e p-4 md:p-6 rounded-xl 
                      shadow-[0_4px_20px_-4px_rgba(147,51,234,0.1)] border-l-4 border-rose-500 w-full
                      hover:shadow-[0_8px_30px_-6px_rgba(147,51,234,0.2)] transition-all duration-300"
                  >
                    {/* Left content */}
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        {/* Icon */}
                        <i className="fas fa-chart-pie h-4 w-4 md:h-5 md:w-5 text-rose-500" />
                        <p className="text-sm md:text-base text-gray-300 font-medium">
                          Active Investments
                        </p>
                      </div>
                      <div className="flex items-baseline gap-1.5">
                        <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-rose-600 to-rose-400 bg-clip-text text-transparent">
                          2,100.00
                        </p>
                        <span className="text-xs md:text-sm font-medium text-gray-500">
                          frs CFA
                        </span>
                      </div>
                    </div>
                    {/* Right content - Button */}
                    <a
                      href="https://greennseed.com/plan/history"
                      className="group/button"
                    >
                      <button
                        className="inline-flex items-center rounded-lg bg-rose-500 text-white font-medium
                               shadow-[0_4px_12px_-2px_rgba(147,51,234,0.3)] hover:shadow-[0_6px_16px_-3px_rgba(147,51,234,0.5)]
                               hover:bg-rose-600 transition-all duration-300
                               p-2 md:px-5 md:py-2.5"
                      >
                        <span className="hidden md:inline">See Progress</span>
                        <i className="fas fa-arrow-right md:ml-2 text-sm md:text-base" />
                      </button>
                    </a>
                  </div>
                </div>
                <div className="group relative">
                  {/* Main card */}
                  <div
                    className="relative flex items-center justify-between bg-gray-800 e p-4 md:p-6 rounded-xl 
                      shadow-[0_4px_20px_-4px_rgba(147,51,234,0.1)] border-l-4 border-green-500 w-full
                      hover:shadow-[0_8px_30px_-6px_rgba(147,51,234,0.2)] transition-all duration-300"
                  >
                    {/* Left content */}
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        {/* Icon */}
                        <i className="fas fa-money-bill-wave h-4 w-4 md:h-5 md:w-5 text-green-500" />
                        <p className="text-sm md:text-base text-gray-300 font-medium">
                          Total Payouts
                        </p>
                      </div>
                      <div className="flex items-baseline gap-1.5">
                        <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                          0.00
                        </p>
                        <span className="text-xs md:text-sm font-medium text-gray-500">
                          frs CFA
                        </span>
                      </div>
                    </div>
                    {/* Right content - Button */}
                    <a
                      href="https://greennseed.com/history"
                      className="group/button"
                    >
                      <button
                        className="inline-flex items-center rounded-lg bg-green-500 text-white font-medium
                               shadow-[0_4px_12px_-2px_rgba(147,51,234,0.3)] hover:shadow-[0_6px_16px_-3px_rgba(147,51,234,0.5)]
                               hover:bg-green-600 transition-all duration-300
                               p-2 md:px-5 md:py-2.5"
                      >
                        <span className="hidden md:inline">See All</span>
                        <i className="fas fa-arrow-right md:ml-2 text-sm md:text-base" />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
  {/* Telegram Widget */}
  <div className="fixed z-50 md:bottom-6 md:right-6">
    {/* Mobile Toggle Tab */}
    <button
      id="toggleSupport"
      className="md:hidden fixed right-0 top-1/2 -translate-y-1/2 bg-blue-500 text-white p-2 rounded-l-lg shadow-lg transform transition-transform duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    </button>
    {/* Support Widget */}
    <div
      id="supportWidget"
      className="fixed right-[-100%] top-1/2 -translate-y-1/2 md:relative md:right-0 md:top-0 md:translate-y-0 transition-all duration-300"
    >
      <a
        href=""
        target="_blank"
        className="flex items-center justify-center w-14 h-14 bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 hover:scale-110 group"
      >
        {/* Telegram Icon */}
        <svg
          className="w-6 h-6 text-white"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-1.97 1.25-5.57 3.69-.53.36-1.01.54-1.44.53-.47-.01-1.38-.27-2.07-.49-.84-.28-1.51-.43-1.46-.91.03-.25.38-.51 1.07-.78 4.2-1.82 7-3.03 8.4-3.61 4-.17 4.83 1.22 4.06 2.31z" />
        </svg>
      </a>
      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap">
          Need help? Chat with us!
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default DashboardPage