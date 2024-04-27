/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  animation: upToDown 1s ease-in-out;
  max-width: 30rem;
  margin: 0 auto;
  margin-top: 2rem;

  h1 {
    color: ${({ theme }) => theme['yellow-500']};
  }

  > p {
    margin-bottom: 2.5rem;
    color: ${({ theme }) => theme['brown-700']};
  }

  @media screen and (min-width: 1024px) {
    max-width: none;
  }
`

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const UserDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  max-width: 35rem;
  padding: 2.5rem;
  border: 0.125rem solid #0000;
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.1);
  border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;
  background: linear-gradient(#fff, #fff) padding-box,
    ${({ theme }) =>
    `linear-gradient(90deg, ${theme['yellow-300']}, ${theme['purple-300']}) border-box`};

  div:nth-child(1) {
    > span {
      background-color: ${({ theme }) => theme['purple-300']};
    }
  }

  div:nth-child(2) {
    span {
      background-color: ${({ theme }) => theme['yellow-300']};
    }
  }

  div:nth-child(3) {
    span {
      background-color: ${({ theme }) => theme['yellow-500']};
    }
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${({ theme }) => theme['brown-700']};

  > span {
    display: flex;
    padding: 0.5rem;
    background-color: #000;
    border-radius: 50%;
  }

  p {
    line-height: 1.5;
  }

  .street-and-number, .delivery-time, .payment-method {
    font-weight: 700;
  }
`
