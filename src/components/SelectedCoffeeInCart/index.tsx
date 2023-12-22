import { Minus, Plus } from '@phosphor-icons/react'
import {
  MainContainer,
  ContainerWrapper,
  ButtonsContainer,
  RemoveButton,
  TitleAndButtonsContainer,
} from './styles'
import { CartCoffee } from '../CoffeeCard'
import { NumberToBRLCurrency } from '@/utils/NumberToCurrency'
import { Trash } from '@phosphor-icons/react/dist/ssr'
import { useEffect } from 'react'

interface SelectedCoffeeProps extends CartCoffee {
  cart: CartCoffee[]
  setCart: React.Dispatch<React.SetStateAction<CartCoffee[]>>
}

export default function SelectedCoffee(props: SelectedCoffeeProps) {
  const { image, title, description, subTotal, quantity, cart, setCart } = props

  const removeCoffeeFromCart = (title: string) => {
    const newCart = cart.filter((item: CartCoffee) => item.title !== title)
    localStorage.setItem('cart', JSON.stringify(newCart))
    window.dispatchEvent(new Event('storage'))
    setCart(newCart)
  }

  useEffect(() => {
    setCart(cart)
  }, [cart, setCart])

  return (
    <MainContainer>
      <ContainerWrapper>
        <img src={image} alt={description} width="64px" />
        <TitleAndButtonsContainer>
          <span className="coffee-title">{title}</span>
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
            <RemoveButton
              type="button"
              onClick={() => removeCoffeeFromCart(title)}
            >
              <Trash size={16} />
              <span>REMOVER</span>
            </RemoveButton>
          </ButtonsContainer>
        </TitleAndButtonsContainer>
      </ContainerWrapper>
      <div className="coffee-price">R$ {NumberToBRLCurrency(subTotal)}</div>
    </MainContainer>
  )
}
