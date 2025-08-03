import React from 'react'
import Hero from '../components/Hero.jsx'
import Departments from '../components/Departments.jsx'
import Biography from '../components/Biography.jsx'
import MessageForm from '../components/MessageForm.jsx'



export default function Home() {
  return (
    <>
      <Hero title={"Welcome to ZeeCare Medical Institute "} imageUrl={"/hero.png"}/>
      <Biography imageUrl={"/about.jpg"}/>
      <Departments/>
      <MessageForm/>
    </>
  )
}
