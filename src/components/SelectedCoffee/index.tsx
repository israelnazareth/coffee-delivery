import { Minus, Plus } from '@phosphor-icons/react'
import * as Styled from './styles'
import { CartCoffee } from '../CoffeeCard'
import { NumberToBRLCurrency } from '@/utils/NumberToCurrency'
import { Trash } from '@phosphor-icons/react/dist/ssr'

interface SelectedCoffeeProps extends CartCoffee {
  cart: CartCoffee[]
  setCart: React.Dispatch<React.SetStateAction<CartCoffee[]>>
}

export default function SelectedCoffee(props: SelectedCoffeeProps) {
  const { image, title, description, quantity, price, cart, setCart } = props

  const setNewCart = (newCart: CartCoffee[]) => {
    localStorage.setItem('cart', JSON.stringify(newCart))
    window.dispatchEvent(new Event('storage'))
    setCart(newCart)
  }

  const removeCoffeeFromCart = (title: string) => {
    const newCart = cart.filter((item: CartCoffee) => item.title !== title)
    setNewCart(newCart)
  }

  const handleIncreaseQuantity = (title: string) => {
    const newCart = cart.map((item: CartCoffee) => {
      if (item.title === title) {
        return {
          ...item,
          quantity: item.quantity + 1,
          subTotal: item.subTotal + item.price,
        }
      }
      return item
    })
    setNewCart(newCart)
  }

  const handleDecreaseQuantity = (title: string) => {
    const newCart = cart.map((item: CartCoffee) => {
      if (item.title === title && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
          subTotal: item.subTotal - item.price,
        }
      }
      return item
    })
    setNewCart(newCart)
  }

  return (
    <Styled.MainContainer>
      <Styled.ContainerWrapper>
        <img src={image} alt={description} />
        <Styled.TitleAndButtonsContainer>
          <span className="coffee-title">{title}</span>
          <Styled.ButtonsContainer>
            <div className="buttons-and-input-container">
              <button
                type="button"
                onClick={() => handleDecreaseQuantity(title)}
              >
                <Minus size={14} weight="bold" />
              </button>
              <input
                type="number"
                min="1"
                placeholder="1"
                disabled
                value={quantity}
              />
              <button
                type="button"
                onClick={() => handleIncreaseQuantity(title)}
              >
                <Plus size={14} weight="bold" />
              </button>
            </div>
            <Styled.RemoveButton
              type="button"
              onClick={() => removeCoffeeFromCart(title)}
            >
              <Trash size={16} />
              <span>REMOVER</span>
            </Styled.RemoveButton>
          </Styled.ButtonsContainer>
        </Styled.TitleAndButtonsContainer>
      </Styled.ContainerWrapper>
      <div className="coffee-price">R$ {NumberToBRLCurrency(price)}</div>
    </Styled.MainContainer>
  )
}
