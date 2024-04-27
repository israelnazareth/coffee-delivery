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
  selectCityStyles,
  selectStateStyles,
} from './styles'
import { useMyContext } from '@/contexts/Context'
import { CartCoffee } from '../CoffeeCard'
import Select from 'react-select'

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

  const citiesOptions = cities?.map((city) => ({
    value: city.nome,
    label: city.nome,
  }))

  const statesOptions = states?.map((state) => ({
    value: state.sigla,
    label: state.sigla,
  }))

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
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Select
            placeholder="UF"
            styles={selectStateStyles}
            options={statesOptions}
            onChange={(target) => handleUF(target?.value || '')}
            value={selectedUF ? { value: selectedUF, label: selectedUF } : null}
          />
          <Select
            placeholder="Cidade"
            styles={selectCityStyles}
            options={citiesOptions}
            onChange={(target) => handleCity(target?.value || '')}
            value={
              selectedCity ? { value: selectedCity, label: selectedCity } : null
            }
          />
        </div>
      </Modal>
    </HeaderContainer>
  )
}
