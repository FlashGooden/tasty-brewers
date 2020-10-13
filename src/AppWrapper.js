import React from 'react'
import {Nav2 as Nav} from './Components/Nav/Nav'
import {Hero1 as Hero} from './Components/Hero/Hero'
import Support from './Components/Support/Support'

export default function AppWrapper() {
  return (
    <div>
      <Nav />
      <Hero />
      <Support />
    </div>
  )
}
