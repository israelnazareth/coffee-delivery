import { InputContainer } from './styles'
import useWindowSize from '@/hooks/useWindowSize'

interface InputFieldProps {
  placeholder: string
  type: string
  className?: string
  isOptional?: boolean
  maxWidth?: string
  maxLength?: number
}

export function InputField(props: InputFieldProps) {
  const { placeholder, type, className, isOptional, maxWidth, maxLength } =
    props

  const { width } = useWindowSize()

  return (
    <InputContainer style={width >= 1100 ? { maxWidth } : undefined}>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        maxLength={maxLength}
      />
      {isOptional && <span>Opcional</span>}
    </InputContainer>
  )
}
