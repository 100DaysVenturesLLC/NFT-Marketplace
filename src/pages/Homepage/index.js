import React from 'react'
import HeroSection from './components/HeroSection'
import Projects from './components/Projects'
import TopCollection from './components/TopCollection'

const  Home = () => {
  return (
    <div className='max-w-8xl mx-auto px-8 sm:px-6 lg:px-32 w-full'> 
        <HeroSection/>
        <Projects/>
<TopCollection/>
         </div>
  )
}

export default Home 