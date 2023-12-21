import { NumberToBRLCurrency } from '@/utils/NumberToCurrency'
import { CartCoffee } from '../CoffeeCard'
import { MainContainer } from './styles'

export default function CartCalculate() {
  const deliveryFee = 3.5

  const cart = JSON.parse(localStorage.getItem('cart') || '[]')

  const calculateTotalAndSubTotal = () => {
    const subTotal = cart.reduce((acc: number, item: CartCoffee) => {
      return acc + item.subTotal
    }, 0)
    const total = subTotal + deliveryFee
    return { total, subTotal }
  }

  return (
    <MainContainer>
      <div className="values-container">
        <div>
          <span className="text">Total de itens</span>
          <span className="value">
            R$ {NumberToBRLCurrency(calculateTotalAndSubTotal().subTotal)}
          </span>
        </div>
        <div>
          <span className="text">Entrega</span>
          <span className="value">R$ {NumberToBRLCurrency(deliveryFee)}</span>
        </div>
        <div className="total">
          <span>Total</span>
          <span>
            R$ {NumberToBRLCurrency(calculateTotalAndSubTotal().total)}
          </span>
        </div>
      </div>
      <button type="button" className="order-confirm-button">
        CONFIRMAR PEDIDO
      </button>
    </MainContainer>
  )
}
