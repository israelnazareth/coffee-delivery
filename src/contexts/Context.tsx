/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { fetchCities, fetchLocation } from '../services/locationAPI'
import { City, State } from '../@types/styled'

type ContextType = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  opacity: number
  setOpacity: React.Dispatch<React.SetStateAction<number>>
  states: State[] | undefined
  setStates: React.Dispatch<React.SetStateAction<State[] | undefined>>
  cities: City[] | undefined
  setCities: React.Dispatch<React.SetStateAction<City[] | undefined>>
  selectedUF: string
  setSelectedUF: React.Dispatch<React.SetStateAction<string>>
  selectedCity: string
  setSelectedCity: React.Dispatch<React.SetStateAction<string>>
  toggleModal: () => void
  handleUF: (event: React.ChangeEvent<HTMLSelectElement>) => void
  handleCity: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const Context = createContext<ContextType | undefined>(undefined)

interface ContextProviderProps {
  children: React.ReactNode
}

function ContextProvider({ children }: ContextProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [opacity, setOpacity] = useState(0)
  const [states, setStates] = useState<State[] | undefined>(undefined)
  const [cities, setCities] = useState<City[] | undefined>(undefined)
  const [selectedUF, setSelectedUF] = useState('')
  const [selectedCity, setSelectedCity] = useState('')

  const toggleModal = () => {
    setOpacity(0)
    setIsOpen(!isOpen)
  }

  const handleUF = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUF(event.target.value)
  }

  const handleCity = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value)
  }

  useEffect(() => {
    if (isOpen && !selectedUF) {
      fetchLocation().then((states) => setStates(states))
    }
    if (isOpen && selectedUF) {
      fetchCities(selectedUF).then((cities) => setCities(cities))
    }
  }, [isOpen, selectedUF])

  const contextValue: ContextType = useMemo(
    () => ({
      isOpen,
      setIsOpen,
      opacity,
      setOpacity,
      states,
      setStates,
      selectedUF,
      setSelectedUF,
      selectedCity,
      setSelectedCity,
      cities,
      setCities,
      toggleModal,
      handleUF,
      handleCity,
    }),
    [isOpen, opacity, states, cities, selectedUF, selectedCity],
  )

  return <Context.Provider value={contextValue}>{children}</Context.Provider>
}

function useMyContext(): ContextType {
  const context = useContext(Context)
  if (!context) {
    throw new Error('useMyContext deve ser usado dentro de um ContextProvider')
  }
  return context
}

export { ContextProvider, useMyContext }
