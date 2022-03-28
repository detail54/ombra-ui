import React from 'react'
import { ITextAreaProps } from './interface'
import { TextAreaSC } from './TextArea.styles'

const TextArea: React.FC<ITextAreaProps> = (props) => {
  const { text, placeHolder = '', styles, onChange } = props

  return (
    <TextAreaSC.TextArea
      placeholder={placeHolder}
      onChange={onChange}
      value={text}
      {...styles}
    />
  )
}

export default TextArea
