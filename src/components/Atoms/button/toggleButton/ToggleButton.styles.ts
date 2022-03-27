import Styled, { css } from 'styled-components'
import { IToggleButtonStyles } from './interface'

const BUTTON_WIDTH = {
  large: '100px',
  medium: '70px',
  small: '56px',
}

const BUTTON_HEIGHT = {
  large: '36px',
  medium: '28px',
  small: '23px',
}

const TEXT_SIZE = {
  large: '30px',
  medium: '20px',
  small: '14px',
}

const Button = Styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
  cursor: pointer;
  position: relative;

  ${(props: IToggleButtonStyles) => css`
    width: ${BUTTON_WIDTH[props.size || 'small']};
    height: ${BUTTON_HEIGHT[props.size || 'small']};
    border-radius: ${props.type === 'angle' ? 'none' : '100px'};
  `}

  ${(props: IToggleButtonStyles) =>
    props.isOn
      ? css`
          background-color: ${props.onColor || '#14bf11'};
        `
      : css`
          background-color: ${props.offColor || '#b4b4b4'};
        `}
`

const ToggleSwitch = Styled.div`
  background-color: white;
  position: relative;
  top: 50%;
  transition: 0.2s;

  ${(props: IToggleButtonStyles) => css`
    left: ${props.isOn ? '0%' : '100%'};
    transform: ${props.isOn ? 'translateY(-50%)' : 'translate(-100%, -50%)'};
    width: ${BUTTON_HEIGHT[props.size || 'small']};
    height: ${BUTTON_HEIGHT[props.size || 'small']};
    border-radius: ${props.type === 'angle' ? 'none' : '100px'};
  `}
`

const Text = Styled.span`
  color: white;
  font-weight: bold;
  position: absolute;
  top: 55%;

  ${(props: IToggleButtonStyles) => css`
    font-size: ${TEXT_SIZE[props.size || 'small']};
    left: ${!props.isOn ? '10%' : '90%'};
    transform: ${!props.isOn ? 'translateY(-50%)' : 'translate(-100%, -50%)'};
  `};
`

export const ToggleButtonSC = {
  Button,
  ToggleSwitch,
  Text,
}
