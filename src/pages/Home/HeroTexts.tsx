import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { BenefitsContainer, TextsContainer } from './styles'

export function HeroTexts() {
  return (
    <div>
      <TextsContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
      </TextsContainer>
      <BenefitsContainer>
        <div>
          <span>
            <ShoppingCart size={16} weight="fill" color="#fff" />
          </span>
          <p>Compra simples e segura</p>
        </div>
        <div>
          <span>
            <Package size={16} weight="fill" color="#fff" />
          </span>
          <p>Embalagem mantém o café intacto</p>
        </div>
        <div>
          <span>
            <Timer size={16} weight="fill" color="#fff" />
          </span>
          <p>Entrega rápida e rastreada</p>
        </div>
        <div>
          <span>
            <Coffee size={16} weight="fill" color="#fff" />
          </span>
          <p>O café chega fresquinho até você</p>
        </div>
      </BenefitsContainer>
    </div>
  )
}
