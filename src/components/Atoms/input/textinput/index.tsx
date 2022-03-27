import React from 'react'
import { IProps } from './interface'
import { TextInputSC } from './textInput.styles'

const TextInput: React.FC<IProps> = ({
  baseText = '',
  placeHolder = '',
  length = 'medium',
  onChange,
}) => {
  return (
    <TextInputSC.Warpper length={length}>
      <TextInputSC.TextInput
        value={baseText}
        placeholder={placeHolder}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onChange(event.currentTarget.value)
        }
      />
    </TextInputSC.Warpper>
  )
}

export default TextInput
