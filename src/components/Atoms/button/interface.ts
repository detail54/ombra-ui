export type TButtonType = 'round' | 'middle' | 'angled'
export type TButtonSize = 'large' | 'medium' | 'small'

export interface IProps {
  label: string
  styles?: IStyleProps
  disabled?: boolean
  onClick: () => void
}

export interface IStyleProps {
  bgColor: string
  fontColor: string
  buttonType: TButtonType
  size: TButtonSize
  border: string
}
