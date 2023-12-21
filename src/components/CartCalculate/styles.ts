import styled from 'styled-components'

export const MainContainer = styled.div`
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
    color: ${({ theme }) => theme['white-pure']};
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    cursor: pointer;
  }
`
