import { useEffect, useState } from 'react'
import { ModalProps } from '../../@types/styled'
import { StyledModal } from './styles'
import { fetchCities, fetchLocation } from '../../services/locationAPI'

export function Modal(props: ModalProps) {
  const { isOpen, toggleModal, opacity, setOpacity } = props

  const [states, setStates] = useState([])
  const [selectedUF, setSelectedUF] = useState('')
  const [cities, setCities] = useState([])

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

  const handleUF = (event: any) => {
    setSelectedUF(event.target.value)
  }

  useEffect(() => {
    if (isOpen && !selectedUF) {
      fetchLocation().then((states) => setStates(states))
    }
    if (isOpen && selectedUF) {
      fetchCities(selectedUF).then((cities) => setCities(cities))
    }
  }, [isOpen, selectedUF])

  return (
    <StyledModal
      isOpen={isOpen}
      afterOpen={afterOpen}
      beforeClose={beforeClose}
      onBackgroundClick={toggleModal}
      onEscapeKeydown={toggleModal}
      backgroundProps={{ opacity }}
    >
      <h2>Selecione a sua localização</h2>
      <div>
        <select name="" id="" onChange={handleUF}>
          <option value="" disabled selected>
            UF
          </option>
          {states.map((state: any) => (
            <option key={state.id}>{state.sigla}</option>
          ))}
        </select>
        <select name="" id="">
          <option value="" disabled selected>
            Cidade
          </option>
          {cities.map((city: any) => (
            <option key={city.id} value={city.nome}>
              {city.nome}
            </option>
          ))}
        </select>
      </div>
    </StyledModal>
  )
}
