import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme['brown-200']};
  border-radius: 0.375rem 2.25rem;
  width: 16rem;

  img {
    margin-top: -1.2rem;
  }
`

export const CardContent = styled.div`
  text-align: center;
  padding: 1.25rem;

  .card-tags {
    display: flex;
    justify-content: center;
    gap: 0.25rem;
    margin-bottom: 1rem;

    span {
      font-size: 0.65rem;
      font-weight: 700;
      text-transform: uppercase;
      padding: 0.25rem 0.5rem;
      border-radius: 6.25rem;
      color: ${({ theme }) => theme['yellow-500']};
      background-color: ${({ theme }) => theme['yellow-100']};
    }
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    font-weight: 400;
    text-align: center;
    margin-bottom: 2rem;
    line-height: 130%;
    color: ${({ theme }) => theme['brown-600']};
  }
`

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .currency-and-price {
    color: ${({ theme }) => theme['brown-700']};

    .currency {
      font-size: 0.875rem;
    }

    .price {
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 800;
      line-height: 130%;
    }
  }

  .input-and-buy {
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

    .cart {
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 0.375rem;
      border: none;
      background-color: ${({ theme }) => theme['purple-500']};
      color: white;
    }
  }
`
