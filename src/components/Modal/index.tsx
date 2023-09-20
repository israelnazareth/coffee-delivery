import { StyledModal } from './styles'
import { useMyContext } from '../../contexts/Context'

export function Modal() {
  const {
    isOpen,
    opacity,
    setOpacity,
    states,
    cities,
    toggleModal,
    handleUF,
    selectedUF,
    handleCity,
    selectedCity,
  } = useMyContext()

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
        <select name="" id="" onChange={handleUF} value={selectedUF}>
          <option value="" disabled selected>
            UF
          </option>
          {states?.map((state) => (
            <option key={state.id}>{state.sigla}</option>
          ))}
        </select>
        <select name="" id="" onChange={handleCity} value={selectedCity}>
          <option value="" disabled selected>
            Cidade
          </option>
          {cities?.map((city) => (
            <option key={city.id} value={city.nome}>
              {city.nome}
            </option>
          ))}
        </select>
      </div>
    </StyledModal>
  )
}
