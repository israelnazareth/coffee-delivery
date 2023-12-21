/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { fetchCities, fetchStates } from '../services/locationAPI'
import { City, State } from '../@types/types'

type ContextType = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  opacity: number
  setOpacity: React.Dispatch<React.SetStateAction<number>>
  states: State[] | undefined
  setStates: React.Dispatch<React.SetStateAction<State[] | undefined>>
  cities: City[] | undefined
  setCities: React.Dispatch<React.SetStateAction<City[] | undefined>>
  selectedUF: string | undefined
  setSelectedUF: React.Dispatch<React.SetStateAction<string | undefined>>
  selectedCity: string | undefined
  setSelectedCity: React.Dispatch<React.SetStateAction<string | undefined>>
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
  const [loading, setLoading] = useState(false)
  const [opacity, setOpacity] = useState(0)
  const [states, setStates] = useState<State[] | undefined>(undefined)
  const [cities, setCities] = useState<City[] | undefined>(undefined)
  const [selectedUF, setSelectedUF] = useState<string | undefined>(undefined)
  const [selectedCity, setSelectedCity] = useState<string | undefined>(
    undefined,
  )

  const toggleModal = () => {
    setOpacity(0)
    setIsOpen(!isOpen)
  }

  const handleUF = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity('')
    const location = JSON.parse(localStorage.getItem('location') || '{}')
    const newLocation = JSON.stringify({ ...location, uf: target.value })

    localStorage.setItem('location', newLocation)

    setSelectedUF(target.value)
  }

  const handleCity = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    const location = JSON.parse(localStorage.getItem('location') || '{}')
    const newLocation = JSON.stringify({ ...location, city: target.value })

    localStorage.setItem('location', newLocation)

    setSelectedCity(target.value)
    toggleModal()
  }

  useEffect(() => {
    fetchStates().then((states) => setStates(states))
    if (isOpen && selectedUF) {
      fetchCities(selectedUF).then((cities) => setCities(cities))
    }
  }, [isOpen, selectedUF])

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    if (!cart) {
      localStorage.setItem('cart', JSON.stringify([]))
    }

    const location = JSON.parse(localStorage.getItem('location') || '{}')
    if (!location) {
      localStorage.setItem('location', JSON.stringify({}))
    }
    setSelectedCity(location?.city)
    setSelectedUF(location?.uf)
  }, [])

  const contextValue: ContextType = useMemo(
    () => ({
      isOpen,
      setIsOpen,
      loading,
      setLoading,
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
    [isOpen, loading, opacity, states, cities, selectedUF, selectedCity],
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
