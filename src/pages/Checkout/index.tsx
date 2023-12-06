// import { Link } from 'react-router-dom'

import {
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import {
  Container,
  ContainerLeft,
  ContainerRight,
  MainContainer,
  DiffContainer,
  HeaderContainer,
  InputsContainer,
  InputsWrapper,
  PaymentContainer,
} from './styles'
import { InputField } from '@/components/InputField'
import { PaymentItem } from '@/components/Select'

export function Checkout() {
  return (
    <>
      <MainContainer>
        {/* <Link to="/success">Success</Link> */}
        <ContainerLeft>
          <h2>Complete seu pedido</h2>
          <Container>
            <HeaderContainer>
              <MapPinLine size={22} color="#C47F17" />
              <div className="texts">
                <h4>Endereço de Entrega</h4>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </HeaderContainer>
            <InputsContainer>
              <InputField type="text" placeholder="CEP" maxWidth="12.5rem" />
              <InputField type="text" placeholder="Rua" />
              <InputsWrapper>
                <InputField
                  type="text"
                  placeholder="Número"
                  maxWidth="12.5rem"
                />
                <InputField type="text" placeholder="Complemento" isOptional />
              </InputsWrapper>
              <InputsWrapper>
                <InputField
                  type="text"
                  placeholder="Bairro"
                  maxWidth="12.5rem"
                />
                <InputField type="text" placeholder="Cidade" />
                <InputField type="text" placeholder="UF" maxWidth="3.75rem" />
              </InputsWrapper>
            </InputsContainer>
          </Container>
          <Container>
            <HeaderContainer>
              <CurrencyDollar size={22} color="#8047F8" />
              <div className="texts">
                <h4>Pagamento</h4>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </HeaderContainer>
            <PaymentContainer>
              <PaymentItem
                id="credit-card"
                title="CARTÃO DE CRÉDITO"
                icon={CreditCard}
              />
              <PaymentItem
                id="debit-card"
                title="CARTÃO DE DÉBITO"
                icon={CreditCard}
              />
              <PaymentItem id="money" title="DINHEIRO" icon={Money} />
            </PaymentContainer>
          </Container>
        </ContainerLeft>
        <ContainerRight>
          <h2>Cafés selecionados</h2>
          <DiffContainer>a</DiffContainer>
        </ContainerRight>
      </MainContainer>
    </>
  )
}
