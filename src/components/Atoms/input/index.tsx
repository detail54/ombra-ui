import React from 'react'
import { IProps } from './interface'
import { InputSC } from './Input.styles'

const Input: React.FC<IProps> = ({ placeHolder, length = 'medium' }) => {
  return (
    <InputSC.Warpper length={length}>
      <InputSC.Input placeholder={placeHolder} />
    </InputSC.Warpper>
  )
}

export default Input
