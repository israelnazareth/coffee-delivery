import { CSSObjectWithLabel } from 'react-select'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  animation: fadeIn 1s ease-in-out;
  gap: 0.75rem;

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
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme['yellow-500']};
    color: ${({ theme }) => theme['pure-white']};
    font-size: 0.75rem;
    border-radius: 50%;
    width: 1.25rem;
    height: 1.25rem;
    position: absolute;
    margin: 0 0 2.3rem 2.3rem;
  }
`

export const menuStyle = (baseStyles: CSSObjectWithLabel) => ({
  ...baseStyles,
  color: '#574F4D',
  '::-webkit-scrollbar': {
    width: '4px',
    height: '0px',
  },
  '::-webkit-scrollbar-track': {
    background: '#f1f1f1',
  },
  '::-webkit-scrollbar-thumb': {
    background: '#888',
  },
  '::-webkit-scrollbar-thumb:hover': {
    background: '#555',
  },
})

const brownColor = (baseStyles: CSSObjectWithLabel) => ({
  ...baseStyles,
  color: '#574F4D',
})

export const selectStateStyles = {
  control: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
  }),
  menuList: menuStyle,
  singleValue: brownColor,
}

export const selectCityStyles = {
  control: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    width: '200px',
  }),
  menuList: menuStyle,
  singleValue: brownColor,
}
