import Styled, { css } from 'styled-components'
import { ITextAreaStyleProps } from './interface'

const TextArea = Styled.textarea`
  width: 100%;
  height: 100%;
  padding: 16px;
  
  ${(props: ITextAreaStyleProps) => css`
    background-color: ${props.areaBgColor || 'white'};
    color: ${props.fontColor || 'black'};
    border: ${props.border || '1px solid black'};
  `}
  
  &:focus {
    outline: none;
  }
`

export const TextAreaSC = {
  TextArea,
}
