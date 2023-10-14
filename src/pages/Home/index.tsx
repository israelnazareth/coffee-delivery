import image from '../../assets/hero-image.png'
import { HeroTexts } from './HeroTexts'
import { HeroContainer, HeroImage } from './styles'

export function Home() {
  return (
    <HeroContainer>
      <HeroImage src={image} alt="" />
      <HeroTexts />
    </HeroContainer>
  )
}
