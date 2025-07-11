import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Helmet } from "react-helmet"
import { useContext, useState } from 'react'
import AuthContext from '../../context/AuthContext'

function SettingsPage() {

  const {user} = useContext(AuthContext);
  const [formData, setFormData] = useState({
    full_name: user?.full_name || "",
    username: user?.username || "",
    email: user?.email || "",
    phone_number: user?.phone_number || "",
    referrer: user?.referrer || "",
  });

  return (
    <>
    <Helmet>
      <title>
        GreennSeed App - Settings
      </title>
    </Helmet>
    <Header/>
      <div className="flex-grow bg-gray-700">
  <div className="max-w-7xl mx-auto shadow-lg rounded-lg overflow-hidden">
   
    <div className="min-h-screen bg-emerald-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-8">
          {/* Profile Section */}
          <div className="bg-emerald-900 shadow-xl rounded-xl overflow-hidden border border-emerald-800 transition-all duration-300 hover:shadow-emerald-100/10">
            <div className="p-8">
              <h2 className="text-3xl font-extrabold text-emerald-100 mb-8 flex items-center">
                <i className="fas fa-user-circle text-rose-500 mr-3 text-4xl" />
                Profile
              </h2>
              <form
              >
                <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2">
                  <div className="relative group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required=""
                      className="peer h-12 w-full pl-3 border-b-2 border-emerald-700 text-emerald-100 bg-transparent focus:outline-none focus:border-rose-500 placeholder-transparent pt-4 transition-all duration-300"
                      value={formData.full_name}
                      onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-3 -top-3.5 text-emerald-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-emerald-500 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-rose-500 peer-focus:text-sm"
                    >
                      name
                    </label>
                    <i className="fas fa-user absolute top-5 right-3 text-emerald-400 group-hover:text-rose-500 transition-colors" />
                  </div>
                  <div className="relative group">
                    <input
                      type="text"
                      id="username"
                      name="username"
                      required=""
                      readOnly=""
                      className="peer h-12 pl-3 w-full border-b-2 border-emerald-700 text-emerald-100 bg-emerald-800/50 focus:outline-none focus:border-rose-500 placeholder-transparent pt-4 transition-all duration-300"
                      value={formData.username}
                      onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    />
                    <label
                      htmlFor="username"
                      className="absolute left-3 -top-3.5 text-emerald-400 text-sm transition-all"
                    >
                      Username
                    </label>
                    <i className="fas fa-user-tag absolute top-5 right-3 text-emerald-400" />
                  </div>
                  {/* Similar styling for other input fields */}
                  <div className="relative group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      readOnly=""
                      className="peer h-12 pl-3 w-full border-b-2 border-emerald-700 text-emerald-100 bg-emerald-800/50 focus:outline-none focus:border-rose-500 placeholder-transparent pt-4 transition-all duration-300"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-3 -top-3.5 text-emerald-400 text-sm transition-all"
                    >
                      E-mail Address
                    </label>
                    <i className="fas fa-envelope absolute top-5 right-3 text-emerald-400" />
                  </div>
                  <div className="relative group">
                    <input
                      type="text"
                      id="referrer"
                      name="referrer"
                      readOnly=""
                      className="peer h-12 pl-3 w-full border-b-2 border-emerald-700 text-emerald-100 bg-emerald-800/50 focus:outline-none focus:border-rose-500 placeholder-transparent pt-4 transition-all duration-300"
                      value={formData.referrer}
                      onChange={(e) => setFormData({ ...formData, referrer: e.target.value })}
                    />
                    <label
                      htmlFor="referrer"
                      className="absolute left-3 -top-3.5 text-emerald-400 text-sm transition-all"
                    >
                      Referrer
                    </label>
                    <i className="fas fa-user-plus absolute top-5 right-3 text-emerald-400" />
                  </div>
                  <div className="relative group">
                    <input
                      type="text"
                      id="number"
                      name="number"
                      className="peer h-12 pl-3 w-full border-b-2 border-emerald-700 text-emerald-100 bg-transparent focus:outline-none focus:border-rose-500 placeholder-transparent pt-4 transition-all duration-300"
                      value={formData.phone_number}
                      onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                    />
                    <label
                      htmlFor="number"
                      className="absolute left-3 -top-3.5 text-emerald-400 text-sm transition-all"
                    >
                      Number
                    </label>
                    <i className="fas fa-phone absolute top-5 right-3 text-emerald-400 group-hover:text-rose-500 transition-colors" />
                  </div>
                  <div className="relative group">
                    <input
                      type="text"
                      id="country"
                      defaultValue="Cameroon"
                      disabled=""
                      className="peer h-12 pl-3 w-full border-b-2 border-emerald-700 text-emerald-100 bg-emerald-800/50 focus:outline-none focus:border-rose-500 placeholder-transparent pt-4 transition-all duration-300"
                    />
                    <label
                      htmlFor="country"
                      className="absolute left-3 -top-3.5 text-emerald-400 text-sm transition-all"
                    >
                      Country
                    </label>
                    <i className="fas fa-globe absolute top-5 right-3 text-emerald-400" />
                  </div>
                </div>
                <div className="mt-8">
                  <button
                    type="submit"
                    id="submit_button_1"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20"
                  >
                    <span id="button_text">Submit</span>
                    <span id="button_loader" className="hidden ml-2">
                      <i className="fas fa-spinner animate-spin" />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* Change Password Section */}
          <div className="bg-emerald-900 shadow-xl rounded-xl overflow-hidden border border-emerald-800 transition-all duration-300 hover:shadow-emerald-100/10">
            <div className="p-8">
              <h2 className="text-3xl font-extrabold text-emerald-100 mb-8 flex items-center">
                <i className="fas fa-lock text-rose-500 mr-3 text-4xl" />
                Change Password
              </h2>
              <form
                action="https://greennseed.com/update/password"
                method="post"
                className="space-y-6"
              >
                <div className="space-y-6">
                  <div className="relative group">
                    <input
                      type="password"
                      id="current_password"
                      name="current_password"
                      required=""
                      autoComplete="current-password"
                      className="peer h-12 pl-10 w-full border-b-2 border-emerald-700 text-emerald-100 bg-transparent focus:outline-none focus:border-rose-500 placeholder-transparent pt-4 transition-all duration-300"
                    />
                    <label
                      htmlFor="current_password"
                      className="absolute left-10 -top-3.5 text-emerald-400 text-sm transition-all"
                    >
                      Current Password
                    </label>
                    <i className="fas fa-key absolute top-5 left-3 text-emerald-400 group-hover:text-rose-500 transition-colors" />
                    <button
                      type="button"
                      className="absolute top-5 right-3 text-emerald-400 focus:outline-none hover:text-rose-500 transition-colors"
                    >
                      <i className="fas fa-eye password_toggle" />
                    </button>
                  </div>
                  <div className="relative group">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      required=""
                      autoComplete="new-password"
                      className="peer h-12 pl-10 w-full border-b-2 border-emerald-700 text-emerald-100 bg-transparent focus:outline-none focus:border-rose-500 placeholder-transparent pt-4 transition-all duration-300"
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-10 -top-3.5 text-emerald-400 text-sm transition-all"
                    >
                      New Password
                    </label>
                    <i className="fas fa-lock absolute top-5 left-3 text-emerald-400 group-hover:text-rose-500 transition-colors" />
                    <button
                      type="button"
                      className="absolute top-5 right-3 text-emerald-400 focus:outline-none hover:text-rose-500 transition-colors"
                    >
                      <i className="fas fa-eye password_toggle" />
                    </button>
                  </div>
                  <div className="relative group">
                    <input
                      type="password"
                      id="password_confirmation"
                      name="password_confirmation"
                      required=""
                      autoComplete="new-password"
                      className="peer h-12 pl-10 w-full border-b-2 border-emerald-700 text-emerald-100 bg-transparent focus:outline-none focus:border-rose-500 placeholder-transparent pt-4 transition-all duration-300"
                    />
                    <label
                      htmlFor="password_confirmation"
                      className="absolute left-10 -top-3.5 text-emerald-400 text-sm transition-all"
                    >
                      Confirm Password
                    </label>
                    <i className="fas fa-lock absolute top-5 left-3 text-emerald-400 group-hover:text-rose-500 transition-colors" />
                    <button
                      type="button"
                      className="absolute top-5 right-3 text-emerald-400 focus:outline-none hover:text-rose-500 transition-colors"
                    >
                      <i className="fas fa-eye password_toggle" />
                    </button>
                  </div>
                </div>
                <div className="mt-8">
                  <button
                    type="submit"
                    id="submit_button_2"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20"
                  >
                    <span id="button_text">Update</span>
                    <span id="button_loader" className="hidden ml-2">
                      <i className="fas fa-spinner animate-spin" />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer/>
    </>

  )
}

export default SettingsPage