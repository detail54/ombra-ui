type TInputLength = 'short' | 'medium' | 'long'

export interface IProps {
  placeHolder: string
  length?: TInputLength
}

export interface IStyleProps {
  length: TInputLength
}
