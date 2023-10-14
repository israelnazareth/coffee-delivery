import image from '../../assets/hero-image.png'
import { HeroTexts } from './HeroTexts'
import { HeroContainer, HeroImage } from './styles'

export function Home() {
  return (
    <>
      <HeroContainer>
        <HeroImage src={image} alt="" />
        <HeroTexts />
      </HeroContainer>
      <div className="coffee-container">
        <h2>Nossos cafés</h2>
      </div>
    </>
  )
}
