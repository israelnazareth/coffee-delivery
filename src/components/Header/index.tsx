import { useState } from 'react'
import { Modal } from '../Modal'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import {
  ButtonsContainer,
  HeaderContainer,
  LocationButton,
  ShoppingCartContainer,
} from './styles'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [opacity, setOpacity] = useState(0)

  function toggleModal() {
    setOpacity(0)
    setIsOpen(!isOpen)
  }

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="coffe delivery logo" />
      </Link>
      <ButtonsContainer>
        <LocationButton onClick={toggleModal}>
          <MapPin size={22} weight="fill" />
          Rio de Janeiro, RJ
        </LocationButton>
        <ShoppingCartContainer>
          <Link to="/checkout">
            <ShoppingCart size={22} weight="fill" />
          </Link>
          <span>1</span>
        </ShoppingCartContainer>
      </ButtonsContainer>
      <Modal
        isOpen={isOpen}
        toggleModal={toggleModal}
        opacity={opacity}
        setOpacity={setOpacity}
        backgroundProps={{ opacity }}
      />
    </HeaderContainer>
  )
}
