import { Icon } from '@phosphor-icons/react'

interface PaymentItemProps {
  id: string
  title: string
  icon: Icon
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  checked?: boolean
}

export function PaymentItem(props: PaymentItemProps) {
  const { id, title, icon, onChange, checked } = props
  const IconComponent = icon

  return (
    <label htmlFor={id} className={`${checked ? 'checked' : ''}`}>
      <IconComponent size={22} color="#8047F8" />
      <input
        type="radio"
        name="payment"
        id={id}
        value={id}
        onChange={onChange}
        checked={checked}
      />
      <span>{title}</span>
    </label>
  )
}
