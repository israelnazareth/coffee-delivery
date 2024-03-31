import styled from 'styled-components'
import coffee from '@/assets/coffee.png'

export const CoffeeLoadingContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme['yellow-100']};
`

export const Cup = styled.div`
  height: 8.75rem;
  width: 11.25rem;
  border: 0.375rem solid ${({ theme }) => theme['yellow-100']};
  box-shadow: 0 0 0 0.375rem ${({ theme }) => theme['pure-white']};
  border-radius: 0.5rem 0.5rem 4.5rem 4.5rem;
  background: url(${coffee});
  background-repeat: repeat-x;
  background-position: 0 140px;
  animation: fill 4s infinite;

  @keyframes fill {
    0% {
      background-position: 0 140px;
    }
    20% {
      background-position: -450px 100px;
    }
    40% {
      background-position: -900px 50px;
    }
    80% {
      background-position: -1350px -40px;
    }
    100% {
      background-position: 0 140px;
    }
  }
`

export const Handle = styled.div`
  height: 4.5rem;
  width: 2.5rem;
  background-color: transparent;
  border: 0.35rem solid ${({ theme }) => theme['pure-white']};
  position: relative;
  top: 0.4rem;
  left: 11rem;
  border-radius: 0 1.5rem 5rem 0;
`
