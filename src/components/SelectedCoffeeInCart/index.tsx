import { Minus, Plus } from '@phosphor-icons/react'
import { Container } from './styles'
import { CartCoffee } from '../CoffeeCard'
import { NumberToBRLCurrency } from '@/utils/NumberToCurrency'

export default function SelectedCoffee(props: CartCoffee) {
  const { image, title, description, subTotal, quantity } = props

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ display: 'flex' }}>
        <img src={image} alt={description} />
        <div>
          <span>{title}</span>
          <Container>
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
          </Container>
        </div>
      </div>
      <div>R${NumberToBRLCurrency(subTotal).trim()}</div>
    </div>
  )
}
