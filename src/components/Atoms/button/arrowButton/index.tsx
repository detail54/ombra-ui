import React from 'react'
import { IArrowButtonProps } from './interface'
import { ArrowButtonSC } from './ArrowButton.styles'

const ArrowButton: React.FC<IArrowButtonProps> = ({
  arrowType,
  direction,
  disabled = false,
  styles,
  onClick,
}) => {
  const arrow =
    arrowType === 'single' ? (
      <>
        <ArrowButtonSC.SingleArrowTopLine
          direction={direction}
          arrowColor={styles?.arrowColor}
          size={styles?.size}
        />
        <ArrowButtonSC.SingleArrowBottomLine
          direction={direction}
          arrowColor={styles?.arrowColor}
          size={styles?.size}
        />
      </>
    ) : (
      <>
        <ArrowButtonSC.DoubleArrowTopLine
          direction={direction}
          arrowColor={styles?.arrowColor}
          arrowlocation='left'
          size={styles?.size}
        />
        <ArrowButtonSC.DoubleArowBottomLine
          direction={direction}
          arrowColor={styles?.arrowColor}
          arrowlocation='left'
          size={styles?.size}
        />
        <ArrowButtonSC.DoubleArrowTopLine
          direction={direction}
          arrowColor={styles?.arrowColor}
          arrowlocation='right'
          size={styles?.size}
        />
        <ArrowButtonSC.DoubleArowBottomLine
          direction={direction}
          arrowColor={styles?.arrowColor}
          arrowlocation='right'
          size={styles?.size}
        />
      </>
    )

  return (
    <ArrowButtonSC.Button onClick={onClick} disabled={disabled} {...styles}>
      {arrow}
    </ArrowButtonSC.Button>
  )
}

export default ArrowButton
