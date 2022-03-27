type TInputLength = 'short' | 'medium' | 'long'

export interface IProps {
  baseText?: string
  placeHolder?: string
  length?: TInputLength
  onChange: (text: string) => void
}

export interface IStyleProps {
  length: TInputLength
}
