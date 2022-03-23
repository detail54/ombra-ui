import Styled, { css } from 'styled-components'
import { IArrowStyles, IArrowButtonStyles } from './interface'

const Button = Styled.button`
  border-radius: 25px;
  position: relative;
  width: 36px;
  height: 36px;
  cursor: pointer;
  
  ${(props: IArrowButtonStyles) => css`
    margin: ${props.margin && props.margin};
    border: ${props.buttonBorder || '1px solid #EBEBED'};
    background-color: ${props.buttonColor || '#EBEBED'};
  `}
  ${(props: IArrowButtonStyles) =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: default;
    `};
`

const Arrow = Styled.div`
  width: 1.5px;
  height: 7px;
  position: absolute;
  
  ${(props: IArrowStyles) => css`
    background-color: ${props.arrowColor || '#BABABA'};
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
  ${(props: IArrowStyles) => css`
    left: ${props.arrowlocation === 'double left' ? '45%' : '55%'};
  `}
`
const DoubleArowBottomLine = Styled(ArrowBottomLine)`
  ${(props: IArrowStyles) => css`
    left: ${props.arrowlocation === 'double left' ? '45%' : '55%'};
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
