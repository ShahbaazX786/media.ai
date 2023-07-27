import Link from 'next/link'
import React from 'react'

const LandingFooter = () => {
  return (
    <div className='flex items-center justify-center text-zinc-400 pb-5'>
        <h1>Created with 💓 by <Link className='text-white hover:bg-gradient-to-r from-purple-400 to-pink-600 rounded-full px-1 py-1 font-semibold' href={'https://shahbaaz.tk/en/home'}>Shaik Shahbaaz Alam.</Link> Under Guidance of <Link className='text-white hover:bg-gradient-to-r from-purple-400 to-pink-600 rounded-full px-1 py-1 font-semibold' href={'https://www.linkedin.com/in/antonio-erdeljac/'}>Antonio Erdeljac.</Link></h1>
    </div>
  )
}

export default LandingFooter