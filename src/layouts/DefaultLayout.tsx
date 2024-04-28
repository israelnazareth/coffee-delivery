/* eslint-disable react-hooks/rules-of-hooks */
import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { Main } from './styles'
import CoffeeLoading from '@/components/CoffeeLoading'
import { useMyContext } from '@/contexts/Context'
import { useEffect } from 'react'

export function DefaultLayout() {
  const { coffeeLoading, showCoffeeLoading } = useMyContext()

  useEffect(() => {
    showCoffeeLoading()
  }, [])

  return (
    <>
      {coffeeLoading ? (
        <CoffeeLoading />
      ) : (
        <>
          <Header />
          <Main>
            <Outlet />
          </Main>
        </>
      )}
    </>
  )
}
