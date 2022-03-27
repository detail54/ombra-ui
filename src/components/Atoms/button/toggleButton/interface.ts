type TButtonType = 'round' | 'angle'
type TButtonSize = 'small' | 'medium' | 'large'

export interface IToggleButtonStyles {
  isOn: boolean
  type?: TButtonType
  size?: TButtonSize
  onColor?: string
  offColor?: string
}

export interface IToggleButtonProps {
  isOn: boolean
  onText?: boolean
  offText?: boolean
  styles?: IToggleButtonStyles
  onClick: () => void
}
