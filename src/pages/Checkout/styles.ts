import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
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

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
`

export const ContainerRight = styled.div``

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
`
