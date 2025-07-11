import { Helmet } from "react-helmet"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { useContext, useState } from "react"
import AuthContext from "../../context/AuthContext"

function ReferrersPage() {

    const { user } = useContext(AuthContext);

    const [copied, setCopied] = useState(false);

    const handleCopy = async() => {
        const textToCopy = `https://greennseed.com/register?ref=${user.username}`
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);
        } catch(e) {
            console.log(e)
        }
    };

  return (
    <>
    <Helmet>
        <title> GreennSeed App - Referrers </title>
    </Helmet>
    <Header/>
        <div className="min-h-screen bg-emerald-950 py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <section className="mb-12">
      <div className="bg-emerald-900/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 border border-emerald-800">
        <h3 className="text-2xl md:text-3xl font-bold text-emerald-100 mb-6 flex items-center">
          <i className="fas fa-gift text-rose-400 mr-3" /> Referral Program
        </h3>
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-emerald-800/50 rounded-xl p-6 border border-emerald-700">
            <div className="text-emerald-300 text-sm font-medium mb-2">
              My Referrals
            </div>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-emerald-100">0</span>
              <span className="ml-2 text-emerald-400 text-sm">
                Total Referred
              </span>
            </div>
          </div>
          <div className="bg-emerald-800/50 rounded-xl p-6 border border-emerald-700">
            <div className="text-emerald-300 text-sm font-medium mb-2">
              Commission Earned
            </div>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-rose-400">0.00</span>
              <span className="ml-2 text-emerald-400 text-sm">XAF</span>
            </div>
          </div>
        </div>
        {/* Referral Link Section */}
        <div className="bg-emerald-800/30 rounded-xl p-6 border border-emerald-700/50">
          <p className="text-emerald-200 mb-4 text-lg">
            Use the below link to invite your friends and earn commissions:
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              className="flex-grow bg-emerald-950/50 border border-emerald-700 rounded-xl px-4 py-3 text-emerald-100 text-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
              value={`https://greennseed.com/register?ref=${user.username}`}
              id="refUrl"
              readOnly
            />
            <button
              id="copyButton"
              className="bg-rose-500 text-white px-6 py-3 rounded-xl hover:bg-rose-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 font-medium flex items-center justify-center space-x-2 min-w-[120px]"
              onClick={handleCopy}
            >
              {copied ? <>
                <span id="copyText">Copied</span>
              <i className="fas fa-copy" />
              </> : <>
                <span id="copyText">Copy</span>
              <i className="fas fa-copy" />
              </>}
            </button>
          </div>
        </div>
      </div>
    </section>
    {/* Referrals Table */}
    <div className="bg-emerald-900/50 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-emerald-800">
      <div className="p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-emerald-100 mb-8 flex items-center">
          <i className="fas fa-users text-rose-400 mr-3" /> My Referrals
        </h2>
        <div className="text-center py-12 bg-emerald-800/20 rounded-xl border border-emerald-800/50">
          <i className="fas fa-users text-emerald-700 text-5xl mb-4" />
          <p className="text-emerald-300 text-lg">
            You don't have any referrals.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer/>
    </>
  )
}

export default ReferrersPage