import React from 'react'
import Hero from './Components/Hero'
import Companies from './Components/Companies'
import Discription from './Components/Discription'
import PriceSection from './Components/Pricing'
import UsersSay from './Components/UserSay'
import TodayOffer from './Components/TodayOffer'
import Footer from './Components/Footer'

function Home() {
  return (
    <main className="min-h-screen w-full bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <div className="space-y-24 py-16">
          <Companies />
          <Discription />
          <PriceSection />
          <UsersSay />
          <TodayOffer />
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default Home;
