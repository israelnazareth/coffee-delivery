import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  gap: 2.5rem;

  .coffee-price {
    color: ${({ theme }) => theme['brown-700']};
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    white-space: nowrap;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    text-align: end;
    gap: 0.5rem;
  }
`

export const ContainerWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 4rem;
    height: 4rem;
  }

  @media (max-width: 425px) {
    justify-content: space-between;
  }
`

export const TitleAndButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 1.25rem;
  gap: 0.5rem;

  .coffee-title {
    color: ${({ theme }) => theme['brown-800']};
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
  }

  @media (max-width: 425px) {
    /* gap: 1rem; */
    align-items: end;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  .buttons-and-input-container {
    display: flex;
    align-items: center;
    border: none;
    background-color: ${({ theme }) => theme['brown-400']};
    padding: 0.5rem;
    border-radius: 0.375rem;

    button {
      display: flex;
      border: none;
      color: ${({ theme }) => theme['purple-300']};
      background-color: transparent;
      cursor: pointer;

      &:hover {
        color: ${({ theme }) => theme['purple-500']};
      }
    }

    input {
      border: none;
      user-select: none;
      text-align: center;
      width: 2.5rem;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  @media (max-width: 425px) {
    flex-direction: column;
    width: max-content;
    justify-content: end;
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: ${({ theme }) => theme['brown-400']};
  cursor: pointer;
  border-radius: 0.375rem;
  padding: 0.5rem;
  gap: 0.25rem;

  svg {
    color: ${({ theme }) => theme['purple-300']};
  }

  span {
    font-size: 0.75rem;
    color: ${({ theme }) => theme['brown-700']};
  }
`
