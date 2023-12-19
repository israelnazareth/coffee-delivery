import { Minus, Plus } from '@phosphor-icons/react'
import { MainContainer, ContainerWrapper, ButtonsContainer } from './styles'
import { CartCoffee } from '../CoffeeCard'
import { NumberToBRLCurrency } from '@/utils/NumberToCurrency'

export default function SelectedCoffee(props: CartCoffee) {
  const { image, title, description, subTotal, quantity } = props

  return (
    <MainContainer>
      <ContainerWrapper>
        <img src={image} alt={description} width="64px" />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <span>{title}</span>
          <ButtonsContainer>
            <div className="buttons-and-input-container">
              <button type="button">
                <Minus size={14} weight="bold" />
              </button>
              <input
                type="number"
                min="1"
                placeholder="1"
                disabled
                value={quantity}
              />
              <button type="button">
                <Plus size={14} weight="bold" />
              </button>
            </div>
            <button>REMOVER</button>
          </ButtonsContainer>
        </div>
      </ContainerWrapper>
      <div>R$ {NumberToBRLCurrency(subTotal)}</div>
    </MainContainer>
  )
}
