import React from 'react'
import image from 'pbl/hero-image.png'
import { HeroTexts } from './HeroTexts'
import {
  CoffeesContainer,
  HeroContainer,
  HeroImage,
  MainContainer,
} from './styles'
import { coffees } from '@/assets/coffees'
import { CoffeeCard } from '@/components/CoffeeCard'

export function Home() {
  return (
    <>
      <HeroContainer>
        <HeroImage src={image} alt="" />
        <HeroTexts />
      </HeroContainer>
      <MainContainer>
        <h2>Nossos cafés</h2>
        <CoffeesContainer>
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
        </CoffeesContainer>
      </MainContainer>
    </>
  )
}
