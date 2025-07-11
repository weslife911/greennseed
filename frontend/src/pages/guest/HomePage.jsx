import React from 'react'
import Header from '../../components/Header'
import { Helmet } from "react-helmet"


function HomePage() {

  return (
    <>

    <Helmet>
      <title>GreenSeed - Grow Your Future with Sustainable Investments</title>
    </Helmet>
    <Header/>
      <main className="container mx-auto px-4 py-8 flex-grow">
  <div className="max-w-7xl mx-auto">
    <section className="text-center mb-16 bg-dark-100 rounded-lg p-12 shadow-lg">
      <h1 className="text-4xl md:text-5xl font-bold text-green-50  mb-6">
        Cultivating Sustainable Living
      </h1>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
        GreenSeed helps you grow your future through smart, sustainable
        investments, providing opportunities for long-term financial growth.
      </p>
    </section>
    <section>
      <h2 className="text-3xl font-bold text-green-50 mb-8">
        Recent Blog Posts
      </h2>
      {/* <div className="space-y-6">
        <div className="bg-dark-100 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-48 w-full">
              <img
                src="storage/blog_images/S1YiHD1QwQLFliajMvvXRO7VE9Yk2pHWzkz5AeHS.jpg"
                alt="Today’s Update On BTC"
                className="h-48 w-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <div className="flex items-center text-sm text-green-50 mb-2">
                  <i className="fas fa-calendar-alt mr-2" />
                  Feb 07, 2025
                </div>
                <a href="blog/todays-update-on-btc" className="block mt-2">
                  <h2 className="text-xl font-semibold text-green-50 hover:text-emerald-700">
                    Today’s Update On BTC
                  </h2>
                </a>
                <p className="mt-3 text-gray-300 ">
                  Today’s New On BTC And How It Influenced the direction of the
                  market
                </p>
              </div>
              <div className="mt-4">
                <a
                  href="blog/todays-update-on-btc"
                  className="text-green-50  hover:text-emerald-800 font-medium inline-flex items-center"
                >
                  Read More
                  <i className="fas fa-arrow-right ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="mt-12"></div>
    </section>
  </div>
</main>
    </>

  )
}

export default HomePage