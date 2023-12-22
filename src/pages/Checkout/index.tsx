// import { Link } from 'react-router-dom'
import AddressAndPaymentContainer from './Address&PaymentContainer'
import SelectedCoffeesContainer from './SelectedCoffeesContainer'
import * as Styled from './styles'

export function Checkout() {
  return (
    <Styled.MainContainer>
      {/* <Link to="/success">Success</Link> */}
      <AddressAndPaymentContainer />
      <SelectedCoffeesContainer />
    </Styled.MainContainer>
  )
}
