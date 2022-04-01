type TTextInputLength = 'short' | 'medium' | 'long'
type TTextInputType = 'text' | 'password'

export interface ITextInputProps {
  type?: TTextInputType
  baseText?: string
  placeHolder?: string
  length?: TTextInputLength
  onChange: (text: string) => void
}

export interface ITextInputStyleProps {
  length: TTextInputLength
}
