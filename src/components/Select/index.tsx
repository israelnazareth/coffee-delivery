import { CreateAddressSchema } from '@/pages/Checkout/Address&PaymentContainer'
import { Icon } from '@phosphor-icons/react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

interface PaymentItemProps {
  id: string
  title: string
  icon: Icon
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  checked?: boolean
  register: UseFormRegister<CreateAddressSchema>
  errors?: FieldErrors<CreateAddressSchema>
}

export function PaymentItem(props: PaymentItemProps) {
  const { id, title, icon: Icon, onChange, checked, register, errors } = props

  const error = errors?.paymentMethod ? 'error' : ''
  const isChecked = checked ? 'checked' : ''

  return (
    <label htmlFor={id} className={`${isChecked} ${error}`}>
      <Icon size={22} color={error ? '#f00' : '#8047F8'} />
      <input
        type="radio"
        id={id}
        value={id}
        checked={checked}
        {...register('paymentMethod', {
          onChange,
        })}
      />
      <span>{title}</span>
    </label>
  )
}
