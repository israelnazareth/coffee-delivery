import styled from 'styled-components'

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
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
