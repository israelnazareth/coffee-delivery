import { StyledModal } from './styles'
import { useMyContext } from '../../contexts/Context'
import { PropsWithChildren } from 'react'

interface ModalProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function Modal(props: PropsWithChildren<ModalProps>) {
  const { isOpen, setIsOpen, children } = props
  const { opacity, setOpacity } = useMyContext()

  const afterOpen = () => {
    setTimeout(() => {
      setOpacity(1)
    }, 100)
  }

  const beforeClose = () => {
    return new Promise((resolve) => {
      setOpacity(0)
      setTimeout(resolve, 300)
    })
  }

  const toggleModal = () => {
    setOpacity(0)
    setIsOpen(!isOpen)
  }

  return (
    <StyledModal
      isOpen={isOpen}
      afterOpen={afterOpen}
      beforeClose={beforeClose}
      onBackgroundClick={toggleModal}
      onEscapeKeydown={toggleModal}
      backgroundProps={{ opacity }}
    >
      {children}
    </StyledModal>
  )
}
