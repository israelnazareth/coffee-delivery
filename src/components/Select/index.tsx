import { Icon } from '@phosphor-icons/react'

interface PaymentItemProps {
  id: string
  title: string
  icon: Icon
  isChecked?: boolean
  setIsChecked?: React.Dispatch<React.SetStateAction<boolean>>
}

export function PaymentItem({ id, title, icon }: PaymentItemProps) {
  const Icon = icon
  return (
    <label htmlFor={id}>
      <Icon size={22} color="#8047F8" />
      <input type="radio" name="payment" id={id} />
      {title}
    </label>
  )
}
