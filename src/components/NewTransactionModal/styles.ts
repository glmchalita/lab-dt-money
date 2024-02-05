import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`

export const Close = styled(Dialog.Close)`
  position: absolute;
  background-color: transparent;

  top: 1.5rem;
  right: 1.5rem;

  cursor: pointer;

  color: ${({ theme }) => theme.color['gray-500']};
`

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${({ theme }) => theme.color['gray-800']};

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background-color: ${({ theme }) => theme.color['gray-900']};
      color: ${({ theme }) => theme.color['gray-300']};
      padding: 1rem;

      &::placeholder {
        color: ${({ theme }) => theme.color['gray-500']};
      }
    }

    button[type='submit'] {
      height: 58px;
      padding: 0 1.25rem;
      margin-top: 1.5rem;
      border-radius: 6px;

      background-color: ${({ theme }) => theme.color['green-500']};
      color: ${({ theme }) => theme.color.white};

      font-weight: bold;
      cursor: pointer;

      transition: background-color 0.2s;

      &:not(:disabled):hover {
        background-color: ${({ theme }) => theme.color['green-700']};
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`

export const TransactionTypeButton = styled(RadioGroup.Item)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 1rem;
  border-radius: 6px;

  cursor: pointer;

  background-color: ${({ theme }) => theme.color['gray-700']};
  color: ${({ theme }) => theme.color['gray-300']};

  transition: background-color 0.2s;

  svg {
    color: ${(props) =>
      props.value === 'income'
        ? props.theme.color['green-300']
        : props.theme.color['red-300']};
  }

  &[data-state='unchecked']:hover {
    background-color: ${({ theme }) => theme.color['gray-600']};
  }

  &[data-state='checked'] {
    color: ${({ theme }) => theme.color.white};
    background-color: ${(props) =>
      props.value === 'income'
        ? props.theme.color['green-500']
        : props.theme.color['red-500']};

    svg {
      color: ${({ theme }) => theme.color.white};
    }
  }
`
