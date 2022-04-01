import React from 'react'
import { ITextInputProps } from './interface'
import { TextInputSC } from './textInput.styles'

const TextInput: React.FC<ITextInputProps> = ({
  type = 'text',
  baseText = '',
  placeHolder = '',
  length = 'medium',
  onChange,
}) => {
  return (
    <TextInputSC.Warpper length={length}>
      <TextInputSC.TextInput
        type={type}
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
