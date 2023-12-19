import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  @media screen and (min-width: 1100px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 3rem;
  }
`

export const Container = styled.div`
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  border-radius: 0.375rem;
  background: ${({ theme }) => theme['brown-200']};
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`

export const InputsWrapper = styled(InputsContainer)`
  label {
    width: 100%;
  }

  @media screen and (min-width: 1100px) {
    flex-direction: row;
  }
`

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
`

export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const HeaderContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  h4 {
    font-family: Roboto, sans-serif;
    color: ${({ theme }) => theme['brown-800']};
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  span {
    color: ${({ theme }) => theme['brown-700']};
    font-family: Roboto;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`

export const DiffContainer = styled(Container)`
  border-radius: 0.375rem 2.75rem;
  gap: 0;
  justify-content: center;
  align-items: center;

  .wrapper-container {
    display: flex;
    flex-direction: column;

    hr {
      border: 1px solid ${({ theme }) => theme['brown-400']};
    }
  }
`

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 0.75rem;

  label {
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 0.75rem;
    cursor: pointer;
    font-size: 0.75rem;
    border-radius: 0.375rem;
    background: ${({ theme }) => theme['brown-400']};
    padding: 1rem;
    color: black;
    white-space: nowrap;
    width: 12rem;
  }

  span {
    font-family: Roboto;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    color: ${({ theme }) => theme['brown-700']};
  }

  input {
    appearance: none;
  }

  .checked {
    outline: 1px solid ${({ theme }) => theme['purple-300']};
    background: ${({ theme }) => theme['purple-100']};
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
