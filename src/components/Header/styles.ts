import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;

  @media screen and (min-width: 1024px) {
    padding: 2rem 0;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`

export const GeneralButton = styled.button`
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0.5rem;
  gap: 4px;
`

export const LocationButton = styled(GeneralButton)`
  background: ${({ theme }) => theme['purple-100']};
  color: ${({ theme }) => theme['purple-500']};
`

export const ShoppingCartContainer = styled(GeneralButton)`
  background: ${({ theme }) => theme['yellow-100']};

  span {
    display: none;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme['yellow-500']};
    color: ${({ theme }) => theme['white-pure']};
    font-size: 0.75rem;
    border-radius: 50%;
    width: 1.25rem;
    height: 1.25rem;
    position: absolute;
    margin: 0 0 2.3rem 2.3rem;
  }
`
