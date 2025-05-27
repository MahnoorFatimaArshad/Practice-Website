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
    <div className="min-h-screen w-full bg-white overflow-x-hidden">
      <Hero />
      <Companies/>
      <Discription/>
      <PriceSection/>
      <UsersSay/>
      <TodayOffer/>
      <Footer/>
    </div>
  )
}

export default Home
