import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import {
  ButtonsContainer,
  HeaderContainer,
  LocationButton,
  ShoppingCartContainer,
} from './styles'
import { useRef, useState } from 'react'

export function Header() {
  const countRef = useRef<HTMLSpanElement>(null)
  const [count, setCount] = useState(0)

  if (count > 0) {
    countRef.current!.style.display = 'flex'
  }

  const handleAddProduct = () => setCount((prevState) => prevState + 1)

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="coffe delivery logo" />
      </Link>
      <ButtonsContainer>
        <LocationButton>
          <MapPin size={22} weight="fill" />
          Localização
        </LocationButton>
        <ShoppingCartContainer>
          <Link to="/checkout">
            <ShoppingCart size={22} weight="fill" />
          </Link>
          <span ref={countRef}>{count}</span>
        </ShoppingCartContainer>
        <button onClick={handleAddProduct}>+</button>
      </ButtonsContainer>
    </HeaderContainer>
  )
}
