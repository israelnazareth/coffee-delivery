// import { Link } from 'react-router-dom'

import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react'
import {
  Container,
  ContainerLeft,
  ContainerRight,
  MainContainer,
  DiffContainer,
  HeaderContainer,
} from './styles'

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
