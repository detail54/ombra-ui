import React from 'react'
import { IProps } from './interface'
import { InputSC } from './Input.styles'

const Input: React.FC<IProps> = ({
  baseText = '',
  placeHolder = '',
  length = 'medium',
  onChange,
}) => {
  return (
    <InputSC.Warpper length={length}>
      <InputSC.Input
        value={baseText}
        placeholder={placeHolder}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onChange(event.currentTarget.value)
        }
      />
    </InputSC.Warpper>
  )
}

export default Input
