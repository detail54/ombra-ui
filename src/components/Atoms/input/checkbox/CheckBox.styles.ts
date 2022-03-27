import Styled, { css } from 'styled-components'
import { ICheckBoxStyleProps } from './interface'

const CHECK_BOX_SIZE = {
  small: '12px',
  medium: '16px',
  large: '20px',
}

const CHECKED_CHECK_BOX_SIZE = {
  small: '14px',
  medium: '18px',
  large: '22px',
}

const Wrap = Styled.div``

const CheckBox = Styled.input.attrs({
  type: 'checkbox',
  id: 'ombra_checkbox',
})`
  display: none;

  &:checked + label {
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 800;

    &::before {
      content: '\\2713';
    }

    ${(props: ICheckBoxStyleProps) => css`
      color: ${props.checkedMarkColor || 'white'};
      background-color: ${props.checkedBoxColor || '#0075ff'};
      width: ${props.checkBoxSize
        ? CHECKED_CHECK_BOX_SIZE[props.checkBoxSize]
        : CHECKED_CHECK_BOX_SIZE.small};
      height: ${props.checkBoxSize
        ? CHECKED_CHECK_BOX_SIZE[props.checkBoxSize]
        : CHECKED_CHECK_BOX_SIZE.small};
    `}
  }
`

const CheckLabel = Styled.label.attrs({
  htmlFor: 'ombra_checkbox',
})`
  border: 1px solid black;
  display: block;
  
  ${(props: ICheckBoxStyleProps) => css`
    border-radius: ${props.checkBoxType === 'round' && '100%'};
    width: ${props.checkBoxSize
      ? CHECK_BOX_SIZE[props.checkBoxSize]
      : CHECK_BOX_SIZE.small};
    height: ${props.checkBoxSize
      ? CHECK_BOX_SIZE[props.checkBoxSize]
      : CHECK_BOX_SIZE.small};
  `} 
`

export const CheckBoxSC = {
  Wrap,
  CheckBox,
  CheckLabel,
}
