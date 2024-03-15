"use client";

import * as Sentry from '@sentry/nextjs'
import NextLink from 'next/link'

const NavBar = () => (
  <nav className="flex items-center justify-between h-20 bg-blue-500 text-white px-5">
    <NextLink href="/" passHref>
      <span className="text-white text-lg font-bold cursor-pointer">Konnectin</span>
    </NextLink>
    <div className="flex space-x-4">
      <NextLink href="/about" passHref>
        <span className="hover:text-blue-800 cursor-pointer">About</span>
      </NextLink>
      <NextLink href="/dashboard" passHref>
        <span className="hover:text-blue-800 cursor-pointer">Dashboard</span>
      </NextLink>
      <NextLink href="/services" passHref>
        <span className="hover:text-blue-800 cursor-pointer">Services</span>
      </NextLink>
      <NextLink href="/contact" passHref>
        <span className="hover:text-blue-800 cursor-pointer">Contact</span>
      </NextLink>
    </div>
  </nav>
);

const Header = () => (
  <header className="text-left pl-10 py-20 h-screen bg-gray-200">
        <h1 className="text-5xl font-bold mb-4 text-blue-900">Experience True & <br></br>Best solutions with <br></br> Konnectin</h1>
        <p className='text-black '>Konnectin is a B2B platform to help small and medium businesses to <br></br>find resources in their industry.</p>

        <div className="mt-8 max-w-md mx-auto rounded-full text-neon-cyan flex items-left pl-10 shadow-lg">
    {/* Search input */}
    <input
      type="text"
      placeholder="Search..."
      className="flex-left bg-transparent outline-none text-gray-400"
    />
    {/* Search button */}
    <button className="ml-2 px-4 py-2  bg-blue-500 text-white rounded hover:bg-blue-600">
      Search
    </button>
  </div>
      </header>
);
export default function DashboardPage() {

  const fakeAPI = async () => {
    try {
      console.log("try...")
      throw new Error("ERRRR")
      
    } catch (error) {
      console.log("...catch")
      Sentry.captureException(error)
      
    }
  }
  return (
    <>
    <NavBar />
    <Header />
    <div className='flex flex-col items-center text-center justify-center h-screen bg-gray-200'>
      <button onClick={fakeAPI} className='text-neon-pink hover:text-red-800 font-bold py-2 px-4 mx-2 rounded'>Send Error</button>
      <h1 className='text-neon-cyan hover:text-neon-cyen font-bold py-2 px-4 mx-2 rounded'>Dashboard page</h1>
    </div>
  </>
  );
}
