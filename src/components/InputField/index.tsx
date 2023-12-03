import { InputContainer } from './styles'
import useWindowSize from '@/hooks/useWindowSize'

interface InputFieldProps {
  placeholder: string
  type: string
  className?: string
  isOptional?: boolean
  maxWidth?: string
}

export function InputField(props: InputFieldProps) {
  const { placeholder, type, className, isOptional, maxWidth } = props

  const { width } = useWindowSize()

  return (
    <InputContainer style={width >= 1024 ? { maxWidth } : undefined}>
      <input type={type} placeholder={placeholder} className={className} />
      {isOptional && <span>Opcional</span>}
    </InputContainer>
  )
}
