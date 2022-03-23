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
          arrowlocation='single left'
        />
        <ArrowButtonSC.SingleArrowBottomLine
          direction={direction}
          arrowColor={styles?.arrowColor}
          arrowlocation='single right'
        />
      </>
    ) : (
      <>
        <ArrowButtonSC.DoubleArrowTopLine
          direction={direction}
          arrowColor={styles?.arrowColor}
          arrowlocation='double left'
        />
        <ArrowButtonSC.DoubleArowBottomLine
          direction={direction}
          arrowColor={styles?.arrowColor}
          arrowlocation='double left'
        />
        <ArrowButtonSC.DoubleArrowTopLine
          direction={direction}
          arrowColor={styles?.arrowColor}
          arrowlocation='double right'
        />
        <ArrowButtonSC.DoubleArowBottomLine
          direction={direction}
          arrowColor={styles?.arrowColor}
          arrowlocation='double right'
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
