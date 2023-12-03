import styled from 'styled-components'

export const InputContainer = styled.label`
  display: flex;
  align-items: center;
  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme['brown-400']};
  background: ${({ theme }) => theme['brown-300']};
  position: relative;
  max-width: 100%;

  input {
    padding: 0.75rem;
    width: 100%;
    border: none;
    background: ${({ theme }) => theme['brown-300']};
    border-radius: 0.25rem;
    color: ${({ theme }) => theme['brown-700']};

    &:focus {
      outline: 1px solid var(--brand-yellow-dark, #c47f17);
    }
  }

  span {
    position: absolute;
    right: 0.75rem;
    color: ${({ theme }) => theme['brown-600']};
    font-size: 0.75rem;
    font-style: italic;
    font-weight: 400;
  }
`
