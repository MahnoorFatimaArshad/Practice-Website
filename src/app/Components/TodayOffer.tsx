import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const TodayOffer = () => {
  return (
    <section className="bg-white pt-24 md:pt-40 px-4 md:px-6 pb-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-4">
            SIGN UP FOR FREE TODAY!
        </h1>
        <p className="text-black text-base sm:text-lg md:text-xl mb-6">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, similique fugiat? Earum tenetur odit rerum nisi ipsum incidunt porro eius repellendus odio, dolorum, et mollitia, cumque dolores amet quis numquam.        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link href="/get-started">
            <button className="bg-black text-white px-6 py-3 rounded-xl  hover:text-blue-600 transition w-full sm:w-auto">
              Get Started
            </button>
          </Link>
          <Link href="/learn-more">
            <button className="flex items-center justify-center gap-2 font-semibold text-black px-6 py-3 rounded-xl hover:bg-white hover:text-blue-700 transition w-full sm:w-auto">
              Learn More <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TodayOffer
