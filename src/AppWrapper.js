import React from 'react'
import {Nav2 as Nav} from './Components/Nav/Nav'
import {Hero1 as Hero} from './Components/Hero/Hero'
import Support from './Components/Support/Support'
import SafeComponent from './Components/SafeComponent/SafeComponent'
import ShopSection from './Components/ShopSection/ShopSection'
import ShopLocal from './Components/ShopLocal/ShopLocal'

export default function AppWrapper() {
  return (
    <div>
      <Nav />
      <Hero />
      <Support />
      <SafeComponent />
      <ShopSection />
      <ShopLocal />
    </div>
  )
}
