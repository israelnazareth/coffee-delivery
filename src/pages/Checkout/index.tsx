import AddressAndPaymentContainer from './Address&PaymentContainer'
import SelectedCoffeesContainer from './SelectedCoffeesContainer'
import * as Styled from './styles'

export function Checkout() {
  return (
    <Styled.MainContainer>
      <AddressAndPaymentContainer />
      <SelectedCoffeesContainer />
    </Styled.MainContainer>
  )
}
