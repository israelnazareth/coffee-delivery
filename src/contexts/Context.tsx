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
  handleUF: (value: string) => void
  handleCity: (value: string) => void
  coffeeLoading: boolean
  setCoffeeLoading: React.Dispatch<React.SetStateAction<boolean>>
  showCoffeeLoading: () => void
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
  const [coffeeLoading, setCoffeeLoading] = useState(false)

  const handleUF = (value: string) => {
    setSelectedCity('')
    const location = JSON.parse(localStorage.getItem('location') || '{}')
    const newLocation = JSON.stringify({ ...location, uf: value })

    localStorage.setItem('location', newLocation)

    setSelectedUF(value)
  }

  const handleCity = (value: string) => {
    const location = JSON.parse(localStorage.getItem('location') || '{}')
    const newLocation = JSON.stringify({ ...location, city: value })

    localStorage.setItem('location', newLocation)

    setSelectedCity(value)
    setIsOpen(false)
  }

  const getStates = async () => {
    const states = await fetchStates()
    setStates(states)
  }

  const getCities = async () => {
    if (isOpen && selectedUF) {
      const cities = await fetchCities(selectedUF)
      setCities(cities)
    }
  }

  useEffect(() => {
    getStates()
    getCities()
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

  const showCoffeeLoading = () => {
    setCoffeeLoading(true)
    setTimeout(() => {
      setCoffeeLoading(false)
    }, 3000)
  }

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
      handleUF,
      handleCity,
      coffeeLoading,
      setCoffeeLoading,
      showCoffeeLoading,
    }),
    [
      isOpen,
      loading,
      opacity,
      states,
      cities,
      selectedUF,
      selectedCity,
      coffeeLoading,
    ],
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
