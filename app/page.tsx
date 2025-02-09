import React from 'react'
import Image from 'next/image'

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center space-y-8 mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            Welcome to BookWise
            
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            Your personal library companion. Discover, track, and manage your reading journey.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium">
            Get Started
          </button>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

const features = [
  {
    title: "Track Your Books",
    description: "Keep track of your reading progress and maintain your personal library."
  },
  {
    title: "Discover New Titles",
    description: "Find your next favorite book with personalized recommendations."
  },
  {
    title: "Join the Community",
    description: "Connect with other readers and share your reading experiences."
  }
]

export default Page