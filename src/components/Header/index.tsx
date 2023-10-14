import { Modal } from '../Modal'
import logo from 'pbl/logo.svg'
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
        <ShoppingCartContainer>
          <Link to="/checkout">
            <ShoppingCart size={22} weight="fill" />
          </Link>
          <span>1</span>
        </ShoppingCartContainer>
      </ButtonsContainer>
      <Modal />
    </HeaderContainer>
  )
}
