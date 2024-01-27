import { FieldValues, UseFormRegister } from 'react-hook-form'
import { InputContainer } from './styles'
import useWindowSize from '@/hooks/useWindowSize'

interface InputFieldProps {
  placeholder: string
  type: string
  className?: string
  isOptional?: boolean
  maxWidth?: string
  maxLength?: number
  name: string
  register: UseFormRegister<FieldValues>
  onKeyUp?: (event: React.FormEvent<HTMLInputElement>) => void
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
  } = props

  const { width } = useWindowSize()

  return (
    <InputContainer style={width >= 1100 ? { maxWidth } : undefined}>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        maxLength={maxLength}
        onKeyUp={onKeyUp}
        {...register(name)}
      />
      {isOptional && <span>Opcional</span>}
    </InputContainer>
  )
}
