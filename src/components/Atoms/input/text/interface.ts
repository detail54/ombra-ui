type TInputLength = 'short' | 'medium' | 'long'

export interface ITextInputProps {
  baseText?: string
  placeHolder?: string
  length?: TInputLength
  onChange: (text: string) => void
}

export interface ITextInputStyleProps {
  length: TInputLength
}
