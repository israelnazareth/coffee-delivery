import { StyledModal } from './styles'

interface ModalProps {
  isOpen: boolean
}

export function Modal({ isOpen }: ModalProps) {
  return (
    <StyledModal isOpen={isOpen}>
      <h1>Teste</h1>
    </StyledModal>
  )
}
