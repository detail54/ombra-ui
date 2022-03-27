import React from 'react'
import { IToggleButtonProps } from './interface'
import { ToggleButtonSC } from './ToggleButton.styles'

const ToggleButton: React.FC<IToggleButtonProps> = (props) => {
  const { isOn, onText, offText, styles, onClick } = props

  const switchOnText = onText && 'ON'
  const switchOffText = offText && 'OFF'

  return (
    <ToggleButtonSC.Button onClick={onClick} isOn={isOn} {...styles}>
      <ToggleButtonSC.ToggleSwitch
        isOn={isOn}
        size={styles?.size}
        type={styles?.type}
      />
      <ToggleButtonSC.Text isOn={isOn} size={styles?.size}>
        {isOn ? switchOnText : switchOffText}
      </ToggleButtonSC.Text>
    </ToggleButtonSC.Button>
  )
}

export default ToggleButton
