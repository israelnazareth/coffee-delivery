import React, { useState } from 'react'
import { CardContainer, CardContent, CardFooter } from './styles'
import { NumberToBRLCurrency } from '@/utils/NumberToCurrency'
import { Minus, ShoppingCart, Plus } from '@phosphor-icons/react'

interface CoffeeCardProps {
  image: string
  tags: string[]
  title: string
  description: string
  price: number
}

export function CoffeeCard(props: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)
  const { image, tags, title, description, price } = props

  const handleChangeQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(event.target.value))
  }

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const handleDecreaseQuantity = () => {
    if (quantity <= 1) return
    setQuantity(quantity - 1)
  }

  return (
    <CardContainer>
      <img src={image} alt={description} />
      <CardContent>
        <div className="card-tags">
          {React.Children.toArray(tags.map((tag) => <span>{tag}</span>))}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <CardFooter>
          <div className="currency-and-price">
            <span className="currency">R$</span>
            <span className="price">{NumberToBRLCurrency(price)}</span>
          </div>
          <div className="input-and-buy">
            <div className="buttons-and-input-container">
              <button type="button" onClick={handleDecreaseQuantity}>
                <Minus size={14} weight="bold" />
              </button>
              <input
                type="number"
                min="1"
                placeholder="1"
                value={quantity}
                onChange={handleChangeQuantity}
                disabled
              />
              <button type="button" onClick={handleIncreaseQuantity}>
                <Plus size={14} weight="bold" />
              </button>
            </div>

            <button type="button" className="cart">
              <ShoppingCart size={22} weight="fill" />
            </button>
          </div>
        </CardFooter>
      </CardContent>
    </CardContainer>
  )
}
