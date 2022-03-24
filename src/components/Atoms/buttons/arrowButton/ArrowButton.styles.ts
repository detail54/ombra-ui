import Styled, { css } from 'styled-components'
import { IArrowStyles, IArrowButtonStyles } from './interface'

const BUTTON_WIDTH = {
  large: '56px',
  medium: '46px',
  small: '36px',
}

const BUTTON_HEIGHT = {
  large: '56px',
  medium: '46px',
  small: '36px',
}

const ARROW_WIDTH = {
  large: '2.5px',
  medium: '2px',
  small: '1.5px',
}

const ARROW_HEIGHT = {
  large: '12px',
  medium: '10px',
  small: '7px',
}

const Button = Styled.button`
  border-radius: 100px;
  position: relative;
  cursor: pointer;
  
  ${(props: IArrowButtonStyles) => css`
    margin: ${props.margin && props.margin};
    border: ${props.buttonBorder || '1px solid #EBEBED'};
    background-color: ${props.buttonColor || '#EBEBED'};
    width: ${BUTTON_WIDTH[props.size || 'small']};
    height: ${BUTTON_HEIGHT[props.size || 'small']};
  `}
  ${(props: IArrowButtonStyles) =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: default;
    `};
`

const Arrow = Styled.div`
  position: absolute;
  
  ${(props: IArrowStyles) => css`
    background-color: ${props.arrowColor || '#BABABA'};
    width: ${ARROW_WIDTH[props.size || 'small']};
    height: ${ARROW_HEIGHT[props.size || 'small']};
  `}
`

const ArrowTopLine = Styled(Arrow)`
  top: 44%;

  ${(props: IArrowStyles) => css`
    transform: ${props.direction === 'left'
      ? 'translate(-50%, -50%) rotate(45deg)'
      : 'translate(-50%, -50%) rotate(-45deg)'};
  `}
`

const ArrowBottomLine = Styled(Arrow)`
  top: 56%;

  ${(props: IArrowStyles) => css`
    transform: ${props.direction === 'left'
      ? 'translate(-50%, -50%) rotate(135deg)'
      : 'translate(-50%, -50%) rotate(-135deg)'};
  `}
`

const SingleArrowTopLine = Styled(ArrowTopLine)`
  left: 50%;
`
const SingleArrowBottomLine = Styled(ArrowBottomLine)`
  left: 50%;
`
const DoubleArrowTopLine = Styled(ArrowTopLine)`
  ${(props: IArrowStyles) =>
    props.direction === 'left'
      ? css`
          left: ${props.arrowlocation === 'left' ? '45%' : '55%'};
        `
      : css`
          left: ${props.arrowlocation === 'left' ? '50%' : '60%'};
        `}
`

const DoubleArowBottomLine = Styled(ArrowBottomLine)`
  ${(props: IArrowStyles) =>
    props.direction === 'left'
      ? css`
          left: ${props.arrowlocation === 'left' ? '45%' : '55%'};
        `
      : css`
          left: ${props.arrowlocation === 'left' ? '50%' : '60%'};
        `}
`

export const ArrowButtonSC = {
  Button,
  Arrow,
  ArrowTopLine,
  ArrowBottomLine,
  SingleArrowTopLine,
  SingleArrowBottomLine,
  DoubleArrowTopLine,
  DoubleArowBottomLine,
}
