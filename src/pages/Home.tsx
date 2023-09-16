import React from 'react'
import Starter from '../components/Starter'
import Instruction from '../components/html/Instruction'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="min-h-screen">
      <Starter/>
      <Instruction/>
      <Footer/>
    </div>
  )
}

export default Home