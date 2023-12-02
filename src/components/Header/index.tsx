import { Modal } from '../Modal'
import logo from '@/assets/logo.svg'
import { Link } from 'react-router-dom'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import {
  ButtonsContainer,
  HeaderContainer,
  LocationButton,
  ShoppingCartContainer,
} from './styles'
import { useMyContext } from '@/contexts/Context'

export function Header() {
  const { toggleModal, selectedCity, selectedUF, loading } = useMyContext()

  const renderLocation = () => {
    return selectedUF && selectedCity
      ? `${selectedCity}, ${selectedUF}`
      : 'Localização'
  }

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="coffe delivery logo" />
      </Link>
      <ButtonsContainer>
        <LocationButton onClick={toggleModal}>
          <MapPin size={22} weight="fill" />
          {loading ? 'Carregando...' : renderLocation()}
        </LocationButton>
        <Link to="/checkout">
          <ShoppingCartContainer>
            <ShoppingCart size={22} weight="fill" color="#C47F17" />
          </ShoppingCartContainer>
        </Link>
      </ButtonsContainer>
      <Modal />
    </HeaderContainer>
  )
}
