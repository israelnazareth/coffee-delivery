import { useEffect, useState } from 'react'
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
import { CartCoffee } from '../CoffeeCard'

export function Header() {
  const { toggleModal, selectedCity, selectedUF, loading } = useMyContext()
  const [globalQuantity, setGlobalQuantity] = useState(0)

  const renderLocation = () => {
    return selectedUF && selectedCity
      ? `${selectedCity}, ${selectedUF}`
      : 'Localização'
  }

  const getGlobalQuantity = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const quantity = cart.reduce((acc: number, item: CartCoffee) => {
      return acc + item.quantity
    }, 0)
    setGlobalQuantity(quantity)
  }

  useEffect(() => {
    getGlobalQuantity()
    window.addEventListener('storage', getGlobalQuantity)
    return () => window.removeEventListener('storage', getGlobalQuantity)
  }, [])

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
            {globalQuantity > 0 && <span>{globalQuantity}</span>}
          </ShoppingCartContainer>
        </Link>
      </ButtonsContainer>
      <Modal />
    </HeaderContainer>
  )
}
