import React from 'react'
import image from 'pbl/hero-image.png'
import { HeroTexts } from './HeroTexts'
import { HeroContainer, HeroImage } from './styles'
import { coffees } from '@/assets/coffees'
import { CoffeeCard } from '@/components/CoffeeCard'

export function Home() {
  return (
    <>
      <HeroContainer>
        <HeroImage src={image} alt="" />
        <HeroTexts />
      </HeroContainer>
      <div className="coffee-container">
        <h2>Nossos cafés</h2>
        {React.Children.toArray(
          coffees.map((coffee) => (
            <CoffeeCard
              image={coffee.image}
              tags={coffee.tags}
              title={coffee.title}
              description={coffee.description}
              price={coffee.price}
            />
          )),
        )}
      </div>
    </>
  )
}
