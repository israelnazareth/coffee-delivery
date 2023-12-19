// import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import * as Icon from '@phosphor-icons/react'
import * as Styled from './styles'
import { InputField } from '@/components/InputField'
import { PaymentItem } from '@/components/Select'
import SelectedCoffee from '@/components/SelectedCoffeeInCart'
import { CartCoffee } from '@/components/CoffeeCard'
import { paymentMethods } from '@/constants'
import { NumberToBRLCurrency } from '@/utils/NumberToCurrency'

export function Checkout() {
  const [selectedPayment, setSelectedPayment] = useState({ paymentMethod: '' })
  const deliveryFee = 3.5

  const cart = JSON.parse(localStorage.getItem('cart') || '[]')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPayment({ paymentMethod: event.target.value })
  }

  const calculateTotalAndSubTotal = () => {
    const subTotal = cart.reduce((acc: number, item: CartCoffee) => {
      return acc + item.subTotal
    }, 0)
    const total = subTotal + deliveryFee
    return { total, subTotal }
  }

  return (
    <Styled.MainContainer>
      {/* <Link to="/success">Success</Link> */}
      <Styled.ContainerLeft>
        <h2>Complete seu pedido</h2>
        <Styled.Container>
          <Styled.HeaderContainer>
            <Icon.MapPinLine size={22} color="#C47F17" />
            <div className="texts">
              <h4>Endereço de Entrega</h4>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </Styled.HeaderContainer>
          <Styled.InputsContainer>
            <InputField type="text" placeholder="CEP" maxWidth="12.5rem" />
            <InputField type="text" placeholder="Rua" />
            <Styled.InputsWrapper>
              <InputField type="text" placeholder="Número" maxWidth="12.5rem" />
              <InputField type="text" placeholder="Complemento" isOptional />
            </Styled.InputsWrapper>
            <Styled.InputsWrapper>
              <InputField type="text" placeholder="Bairro" maxWidth="12.5rem" />
              <InputField type="text" placeholder="Cidade" />
              <InputField
                type="text"
                placeholder="UF"
                maxWidth="3.75rem"
                maxLength={2}
              />
            </Styled.InputsWrapper>
          </Styled.InputsContainer>
        </Styled.Container>
        <Styled.Container>
          <Styled.HeaderContainer>
            <Icon.CurrencyDollar size={22} color="#8047F8" />
            <div className="texts">
              <h4>Pagamento</h4>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </Styled.HeaderContainer>
          <Styled.PaymentContainer className="payment">
            {React.Children.toArray(
              paymentMethods.map(({ id, title, icon }) => (
                <PaymentItem
                  id={id}
                  title={title}
                  icon={icon}
                  onChange={handleChange}
                  checked={selectedPayment.paymentMethod === id}
                />
              )),
            )}
          </Styled.PaymentContainer>
        </Styled.Container>
      </Styled.ContainerLeft>
      <Styled.ContainerRight>
        <h2>Cafés selecionados</h2>
        <Styled.DiffContainer>
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
                  />
                  <hr style={{ margin: '1.5rem 0' }} />
                </div>
              )
            }),
          )}
          <div
            style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span>Subtotal</span>
              <span>
                R$ {NumberToBRLCurrency(calculateTotalAndSubTotal().subTotal)}
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span>Taxa de entrega</span>
              <span>R$ {NumberToBRLCurrency(deliveryFee)}</span>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span>Total</span>
              <span>
                R$ {NumberToBRLCurrency(calculateTotalAndSubTotal().total)}
              </span>
            </div>
            <button type="button">Confirmar Pedido</button>
          </div>
        </Styled.DiffContainer>
      </Styled.ContainerRight>
    </Styled.MainContainer>
  )
}
