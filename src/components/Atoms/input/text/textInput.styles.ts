import Styled, { css } from 'styled-components'
import { ITextInputStyleProps } from './interface'

const INPUT_LENGTH = {
  short: '200px',
  medium: '250px',
  long: '300px',
}

const Warpper = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  padding: 5px;
  border: 1px solid black;

  ${(props: ITextInputStyleProps) => css`
    width: ${INPUT_LENGTH[props.length]};
  `}
`

const TextInput = Styled.input`
  border: none;
  width: 100%;

  &:focus {
    outline: none;
  }
`

export const TextInputSC = {
  Warpper,
  TextInput,
}
