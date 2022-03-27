type TCheckBoxType = 'round' | 'angle'
type TCheckBoxSize = 'small' | 'medium' | 'large'

export interface ICheckBoxStyleProps {
  checkBoxType?: TCheckBoxType
  checkBoxSize?: TCheckBoxSize
  checkedBoxColor?: string
  checkedMarkColor?: string
}

export interface ICheckBoxProps {
  styles: ICheckBoxStyleProps
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
