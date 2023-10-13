import image from '../../assets/hero-image.png'
import { HeroContainer, HeroImage, TextsContainer } from './styles'

export function Home() {
  return (
    <>
      <HeroContainer>
        <HeroImage src={image} alt="" />
        <TextsContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </TextsContainer>
        <div className="benefits-container">
          <div className="left"></div>
          <div className="right"></div>
        </div>
      </HeroContainer>
    </>
  )
}
