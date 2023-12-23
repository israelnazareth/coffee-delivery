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
  const {
    isOpen,
    setIsOpen,
    selectedCity,
    selectedUF,
    loading,
    handleUF,
    handleCity,
    states,
    cities,
  } = useMyContext()
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
        <LocationButton onClick={() => setIsOpen(true)}>
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
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <h2>Selecione a sua localização</h2>
        <div>
          <select name="" id="" onChange={handleUF} value={selectedUF}>
            <option value="" disabled selected>
              UF
            </option>
            {states?.map((state) => (
              <option key={state.id}>{state.sigla}</option>
            ))}
          </select>
          <select name="" id="" onChange={handleCity} value={selectedCity}>
            <option value="" disabled selected>
              Cidade
            </option>
            {cities?.map((city) => (
              <option key={city.id} value={city.nome}>
                {city.nome}
              </option>
            ))}
          </select>
        </div>
      </Modal>
    </HeaderContainer>
  )
}
