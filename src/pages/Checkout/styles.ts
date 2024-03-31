import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 1rem;
  animation: upToDown 0.5s ease-in-out;

  @media screen and (min-width: 1100px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const Container = styled.div`
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  border-radius: 0.375rem;
  background: ${({ theme }) => theme['brown-200']};

  .has-empty-fields {
    color: ${({ theme }) => theme['pure-red']};
    font-size: 0.875rem;
    font-style: italic;
    font-weight: 400;
  }
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

  @media screen and (max-width: 1100px) {
    max-width: 26rem;
    margin: 0 auto;
  }
`

export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1100px) {
    max-width: 26rem;
    margin: 0 auto;
  }
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

  @keyframes myAnimation {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  .myAnimationClass {
    animation: myAnimation 1s forwards;
  }

  .wrapper-container {
    display: flex;
    flex-direction: column;

    hr {
      border: 1px solid ${({ theme }) => theme['brown-400']};
    }
  }

  .empty-cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    svg {
      color: ${({ theme }) => theme['brown-800']};
    }

    span {
      color: ${({ theme }) => theme['brown-800']};
      font-family: 'Baloo 2', sans-serif;
      font-size: 1rem;
      font-style: normal;
      font-weight: 700;
    }

    hr {
      border: 1px solid ${({ theme }) => theme['brown-400']};
      width: 100%;
    }

    a {
      width: 100%;
      text-decoration: none;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 3rem;
      border: none;
      border-radius: 0.375rem;
      background-color: ${({ theme }) => theme['yellow-300']};
      color: ${({ theme }) => theme['pure-white']};
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 700;
      cursor: pointer;
    }
  }

  @media (max-width: 1100px) {
    max-width: 26rem;
    margin: 0 auto;
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

    &.error {
      outline: 1px solid var(--brand-yellow-dark, #f00);
    }
  }

  span {
    font-family: Roboto;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    color: ${({ theme }) => theme['brown-700']};
    user-select: none;
  }

  input {
    appearance: none;
  }

  .checked {
    outline: 1px solid ${({ theme }) => theme['purple-300']};
    background: ${({ theme }) => theme['purple-100']};
  }

  @media screen and (min-width: 1100px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const ValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.5rem;

  .values-container {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    div {
      display: flex;
      justify-content: space-between;
    }
  }

  .text,
  .value {
    color: ${({ theme }) => theme['brown-700']};
    font-style: normal;
    font-weight: 400;
  }

  .text {
    font-size: 0.875rem;
  }

  .value {
    font-size: 1rem;
  }

  .total {
    color: ${({ theme }) => theme['brown-800']};
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
  }

  .order-confirm-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3rem;
    border: none;
    border-radius: 0.375rem;
    background-color: ${({ theme }) => theme['yellow-300']};
    color: ${({ theme }) => theme['pure-white']};
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    cursor: pointer;
  }
`
