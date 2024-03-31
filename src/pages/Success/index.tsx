import image from '@/assets/motoboy.svg'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import {
  Container,
  LeftContainer,
  MainContainer,
  UserDataContainer,
} from './styles'
import { paymentMethodDictionary } from '@/constants'
import { CreateAddressSchema } from '../Checkout/Address&PaymentContainer'

export function Success() {
  const checkoutData: CreateAddressSchema = JSON.parse(
    localStorage.getItem('checkoutData') || '{}',
  )

  return (
    <MainContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <LeftContainer>
        <UserDataContainer>
          <Container>
            <span>
              <MapPin size={16} weight="fill" color="#fff" />
            </span>
            <p>
              Entrega em{' '}
              <span>
                {checkoutData.street}, {checkoutData.number}
              </span>
              {`, ${checkoutData.complement}`} - {checkoutData.neighborhood} -{' '}
              {checkoutData.city}, {checkoutData.uf}
            </p>
          </Container>
          <Container>
            <span>
              <Timer size={16} weight="fill" color="#fff" />
            </span>
            <div>
              <p>Previsão de entrega</p>
              <p>20 - 30 min</p>
            </div>
          </Container>
          <Container>
            <span>
              <CurrencyDollar size={16} color="#fff" />
            </span>
            <div>
              <p>Pagamento na entrega</p>
              <p>
                {
                  paymentMethodDictionary[
                    checkoutData?.paymentMethod as keyof typeof paymentMethodDictionary
                  ]
                }
              </p>
            </div>
          </Container>
        </UserDataContainer>
        <img src={image} alt="Motoboy" />
      </LeftContainer>
    </MainContainer>
  )
}
