import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { InputContainer } from './styles'
import useWindowSize from '@/hooks/useWindowSize'
import { CreateAddressSchema } from '@/pages/Checkout/Address&PaymentContainer'

interface InputFieldProps {
  placeholder: string
  type: string
  className?: string
  isOptional?: boolean
  maxWidth?: string
  maxLength?: number
  name: keyof CreateAddressSchema
  register: UseFormRegister<CreateAddressSchema>
  onKeyUp?: (event: React.FormEvent<HTMLInputElement>) => void
  errors?: FieldErrors<CreateAddressSchema>
}

export function InputField(props: InputFieldProps) {
  const {
    name,
    placeholder,
    type,
    className,
    isOptional,
    maxWidth,
    maxLength,
    register,
    onKeyUp,
    errors,
  } = props

  const { width } = useWindowSize()

  const error = errors && errors[name] ? 'error' : ''

  return (
    <>
      <InputContainer style={width >= 1100 ? { maxWidth } : undefined}>
        <input
          type={type}
          placeholder={placeholder}
          className={`${className} ${error}`}
          maxLength={maxLength}
          onKeyUp={onKeyUp}
          {...register(name)}
        />
        {isOptional && <span>Opcional</span>}
      </InputContainer>
    </>
  )
}
