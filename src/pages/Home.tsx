import React from 'react'
import Starter from '../components/Starter'
import Instruction from '../components/html/Instruction'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="flex min-h-screen pt-[50px] justify-start md:justify-center items-center w-full flex-col 2xl:pt-0 xl:pt-[100px]">
      <Starter/>
      <Instruction/>
      <Footer/>
    </div>
  )
}

export default Home