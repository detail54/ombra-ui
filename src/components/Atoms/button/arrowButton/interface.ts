type TButtonSize = 'small' | 'medium' | 'large'
type TArrowDirection = 'left' | 'right'
type TArrowType = 'single' | 'double'
type TArrowLocation = 'left' | 'right'

export interface IArrowButtonStyles {
  disabled?: boolean
  margin?: string
  arrowColor?: string
  buttonColor?: string
  buttonBorder?: string
  size?: TButtonSize
}

export interface IArrowStyles {
  direction: TArrowDirection
  arrowColor?: string
  arrowlocation?: TArrowLocation
  size?: TButtonSize
}

export interface IArrowButtonProps {
  arrowType: TArrowType
  direction: TArrowDirection
  disabled?: boolean
  styles?: IArrowButtonStyles
  onClick: () => void
}
