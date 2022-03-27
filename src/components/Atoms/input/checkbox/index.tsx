import React from 'react'
import { ICheckBoxProps } from './interface'
import { CheckBoxSC } from './CheckBox.styles'

const CheckBox: React.FC<ICheckBoxProps> = (props) => {
  const { styles, onChange } = props

  return (
    <CheckBoxSC.Wrap>
      <CheckBoxSC.CheckBox
        checkedMarkColor={styles.checkedMarkColor}
        checkedBoxColor={styles.checkedBoxColor}
        checkBoxSize={styles.checkBoxSize}
        onChange={onChange}
      />
      <CheckBoxSC.CheckLabel
        checkBoxType={styles.checkBoxType}
        checkBoxSize={styles.checkBoxSize}
      />
    </CheckBoxSC.Wrap>
  )
}

export default CheckBox
