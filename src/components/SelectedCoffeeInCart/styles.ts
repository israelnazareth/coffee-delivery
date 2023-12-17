import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

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
`
