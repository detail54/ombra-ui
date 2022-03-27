import Styled, { css } from 'styled-components'
import { IBasicButtonStyle } from './interface'

const BUTTON_TYPE = {
  round: '30px',
  middle: '12px',
  angled: 'none',
}

const BUTTON_WIDTH = {
  large: '150px',
  medium: '100px',
  small: '80px',
}

const BUTTON_HEIGHT = {
  large: '50px',
  medium: '40px',
  small: '30px',
}

const FONT_SIZE = {
  large: '1.5rem',
  medium: '1rem',
  small: '0.8rem',
}

const Button = Styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  
  ${(props: IBasicButtonStyle) => css`
    background-color: ${props.bgColor};
    border-radius: ${BUTTON_TYPE[props.buttonType]};
    width: ${BUTTON_WIDTH[props.size]};
    height: ${BUTTON_HEIGHT[props.size]};
    font-size: ${FONT_SIZE[props.size]};
    color: ${props.fontColor};
    border: ${props.border};
  `}
`

export const ButtonSC = {
  Button,
}
