import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    padding: 1rem;
    border: 0;
    border-radius: 6px;

    background-color: ${({ theme }) => theme.color['gray-900']};
    color: ${({ theme }) => theme.color['gray-300']};

    &::placeholder {
      color: ${({ theme }) => theme.color['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.color['green-300']};

    background-color: transparent;
    color: ${({ theme }) => theme.color['green-300']};
    font-weight: bold;

    transition:
      background-color 0.2s,
      color 0.2s,
      border-color 0.2s;

    &:not(:disabled):hover {
      border-color: ${({ theme }) => theme.color['green-500']};

      background-color: ${({ theme }) => theme.color['green-500']};
      color: ${({ theme }) => theme.color.white};
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`
