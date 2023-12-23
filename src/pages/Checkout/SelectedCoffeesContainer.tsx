import React, { useState } from 'react'
import * as Styled from './styles'
import SelectedCoffee from '@/components/SelectedCoffeeInCart'
import { CartCoffee } from '@/components/CoffeeCard'
import { NumberToBRLCurrency } from '@/utils/NumberToCurrency'
import EmptyCart from './EmptyCart'

export default function SelectedCoffeesContainer() {
  const deliveryFee = 3.5
  const localCart = JSON.parse(localStorage.getItem('cart') || '[]')
  const [cart, setCart] = useState<CartCoffee[]>(localCart)

  const calculateTotalAndSubTotal = () => {
    const subTotal = cart.reduce((acc: number, item: CartCoffee) => {
      return acc + item.subTotal
    }, 0)
    const total = subTotal + deliveryFee
    return { subTotal, total }
  }

  return (
    <Styled.ContainerRight>
      <h2>Cafés selecionados</h2>
      <Styled.DiffContainer>
        {cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <div className="coffees-container">
              {React.Children.toArray(
                cart.map((coffee: CartCoffee) => {
                  return (
                    <div className="wrapper-container">
                      <SelectedCoffee
                        image={coffee.image}
                        title={coffee.title}
                        description={coffee.description}
                        price={coffee.price}
                        quantity={coffee.quantity}
                        subTotal={coffee.subTotal}
                        cart={cart}
                        setCart={setCart}
                      />
                      <hr style={{ margin: '1.5rem 0' }} />
                    </div>
                  )
                }),
              )}
            </div>
            <Styled.ValuesContainer>
              <div className="values-container">
                <div>
                  <span className="text">Total de itens</span>
                  <span className="value">
                    R${' '}
                    {NumberToBRLCurrency(calculateTotalAndSubTotal().subTotal)}
                  </span>
                </div>
                <div>
                  <span className="text">Entrega</span>
                  <span className="value">
                    R$ {NumberToBRLCurrency(deliveryFee)}
                  </span>
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
            </Styled.ValuesContainer>
          </>
        )}
      </Styled.DiffContainer>
    </Styled.ContainerRight>
  )
}
