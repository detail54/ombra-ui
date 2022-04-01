type TImportance = 1 | 2 | 3 | 4 | 5 | 6
type TTextAlign = 'left' | 'center' | 'right'

export interface ITitleStyleProps {
  fontColor?: string
  textAlign?: TTextAlign
}

export interface ITitleProps {
  text: string
  importance?: TImportance
  styles?: ITitleStyleProps
}
