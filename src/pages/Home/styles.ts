import styled from 'styled-components'

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 0 3rem;

  img {
    align-self: center;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`

export const HeroImage = styled.img`
  width: 100%;
  max-width: 30rem;
  margin-bottom: 2rem;
`

export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 3rem;

  h1 {
    color: ${({ theme }) => theme['brown-900']};
    line-height: 110%;
  }

  p {
    color: ${({ theme }) => theme['brown-800']};
    font-family: Roboto;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
  }
`

export const BenefitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.34rem;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: fit-content;
      padding: 0.5rem;
      border-radius: 50%;
    }

    p {
      color: ${({ theme }) => theme['brown-700']};
      font-family: Roboto;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
    }
  }

  div:nth-child(1) {
    span {
      background-color: ${({ theme }) => theme['yellow-500']};
    }
  }

  div:nth-child(2) {
    span {
      background-color: ${({ theme }) => theme['brown-700']};
    }
  }

  div:nth-child(3) {
    span {
      background-color: ${({ theme }) => theme['yellow-300']};
    }
  }

  div:nth-child(4) {
    span {
      background-color: ${({ theme }) => theme['purple-300']};
    }
  }
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

export const CoffeesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  justify-items: center;
  gap: 4rem;
`
