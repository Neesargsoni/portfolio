import React from 'react'
import { SpotLight } from 'three'
import { CardSpotlight } from './ui/Spotlight'

function Hero() {
  return (
    <div className='pb-20 pt-36'>
      <CardSpotlight>
        {/* CardSpotlight requires children prop */}
        <div>Content goes here</div>
      </CardSpotlight>
    </div>
  )
}

export default Hero
