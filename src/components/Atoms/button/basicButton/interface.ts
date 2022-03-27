export type TButtonType = 'round' | 'middle' | 'angled'
export type TButtonSize = 'large' | 'medium' | 'small'

export interface IBasicButtonProps {
  label: string
  styles?: IBasicButtonStyle
  disabled?: boolean
  onClick: () => void
}

export interface IBasicButtonStyle {
  bgColor: string
  fontColor: string
  buttonType: TButtonType
  size: TButtonSize
  border: string
}
