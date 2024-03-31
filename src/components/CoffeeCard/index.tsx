import React, { useState } from 'react'
import { CardContainer, CardContent, CardFooter } from './styles'
import { NumberToBRLCurrency } from '@/utils/NumberToCurrency'
import { Minus, ShoppingCart, Plus } from '@phosphor-icons/react'
import { toast } from 'react-toastify'

interface CoffeeCardProps {
  image: string
  tags?: string[]
  title: string
  description: string
  price: number
}

export interface CartCoffee extends CoffeeCardProps {
  quantity: number
  subTotal: number
}

export function CoffeeCard(props: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)
  const { image, tags, title, description, price } = props

  const handleSendToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')

    const subTotal = price * quantity
    const newCoffee: CartCoffee = {
      image,
      tags,
      title,
      description,
      price,
      quantity,
      subTotal,
    }

    const coffeeIsInTheCart = cart.some(
      (item: CartCoffee) => item.title === title,
    )

    const s = quantity > 1 ? 's' : ''
    const addedCoffee = `${quantity} ${title} adicionado${s} ao carrinho!`

    if (coffeeIsInTheCart) {
      const newCart = cart.map((item: CartCoffee) => {
        if (item.title === title) {
          return {
            ...item,
            quantity: item.quantity + quantity,
            subTotal: item.subTotal + subTotal,
          }
        }
        return item
      })

      localStorage.setItem('cart', JSON.stringify(newCart))
      window.dispatchEvent(new Event('storage'))
      toast(`+${addedCoffee}`)
    } else {
      localStorage.setItem('cart', JSON.stringify([...cart, newCoffee]))
      window.dispatchEvent(new Event('storage'))
      toast(addedCoffee)
    }
  }

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
          {React.Children.toArray(tags?.map((tag) => <span>{tag}</span>))}
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

            <button type="button" className="cart" onClick={handleSendToCart}>
              <ShoppingCart size={22} weight="fill" />
            </button>
          </div>
        </CardFooter>
      </CardContent>
    </CardContainer>
  )
}

CoffeeCard.defaultProps = {
  tags: [],
}
