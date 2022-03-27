import React from 'react'
import { ButtonSC as Styled } from './Button.styles'
import { IBasicButtonProps } from './interface'

const Button: React.FC<IBasicButtonProps> = ({
  label,
  styles = {
    bgColor: 'white',
    fontColor: 'black',
    buttonType: 'round',
    size: 'medium',
    border: '1px solid black',
  },
  disabled = false,
  onClick,
}) => {
  return (
    <Styled.Button onClick={onClick} disabled={disabled} {...styles}>
      {label}
    </Styled.Button>
  )
}

export default Button
