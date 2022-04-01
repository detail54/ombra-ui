import React from 'react'
import { ITitleProps } from './interface'
import { TitleSC } from './Title.stypes'

const Title: React.FC<ITitleProps> = (props) => {
  const { text, importance = 3, styles } = props

  let comp: JSX.Element = <>max importance is 10</>

  switch (importance) {
    case 1:
      comp = (
        <TitleSC.H1 fontColor={styles?.fontColor} textAlign={styles?.textAlign}>
          {text}
        </TitleSC.H1>
      )
      break

    case 2:
      comp = (
        <TitleSC.H2 fontColor={styles?.fontColor} textAlign={styles?.textAlign}>
          {text}
        </TitleSC.H2>
      )
      break

    case 3:
      comp = (
        <TitleSC.H3 fontColor={styles?.fontColor} textAlign={styles?.textAlign}>
          {text}
        </TitleSC.H3>
      )
      break

    case 4:
      comp = (
        <TitleSC.H4 fontColor={styles?.fontColor} textAlign={styles?.textAlign}>
          {text}
        </TitleSC.H4>
      )
      break

    case 5:
      comp = (
        <TitleSC.H5 fontColor={styles?.fontColor} textAlign={styles?.textAlign}>
          {text}
        </TitleSC.H5>
      )
      break

    case 6:
      comp = (
        <TitleSC.H6 fontColor={styles?.fontColor} textAlign={styles?.textAlign}>
          {text}
        </TitleSC.H6>
      )
      break

    default:
      break
  }

  return comp
}

export default Title
