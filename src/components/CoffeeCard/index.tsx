import React from 'react'

interface CoffeeCardProps {
  image: string
  tags: string[]
  title: string
  description: string
  price: number
}

export function CoffeeCard(props: CoffeeCardProps) {
  const { image, tags, title, description, price } = props

  return (
    <div className="card-container">
      <img src={image} alt={description} />
      <div className="card-content">
        <div className="card-tags">
          {React.Children.toArray(tags.map((tag) => <span>{tag}</span>))}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="card-price">{price}</span>
      </div>
    </div>
  )
}
