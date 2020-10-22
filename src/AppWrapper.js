import React from 'react'
import {Nav2 as Nav} from './Components/Nav/Nav'
import {Hero1 as Hero} from './Components/Hero/Hero'
import Support from './Components/Support/Support'
import SafeComponent from './SafeComponent/SafeComponent'
import ShopSection from './Components/ShopSection/ShopSection'

export default function AppWrapper() {
  return (
    <div>
      <Nav />
      <Hero />
      <Support />
      <SafeComponent />
      <ShopSection />
    </div>
  )
}
