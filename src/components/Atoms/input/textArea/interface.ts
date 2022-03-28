import React from 'react'

export interface ITextAreaStyleProps {
  areaBgColor?: string
  fontColor?: string
  border?: string
}

export interface ITextAreaProps {
  text: string
  placeHolder?: string
  styles?: ITextAreaStyleProps
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}
