import Styled, { css } from 'styled-components'
import { ITitleStyleProps } from './interface'

const Header = css`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;

  ${(props: ITitleStyleProps) => css`
    color: ${props.fontColor || 'balck'};
    justify-content: ${props.textAlign || 'left'};
  `}
`

const H1 = Styled.h1`
  font-weight: 800;
  font-size: 2rem;
  ${Header}
`

const H2 = Styled.h2`
  font-weight: 750;
  font-size: 1.8rem;
  ${Header}
`

const H3 = Styled.h3`
  font-weight: 700;
  font-size: 1.6rem;
  ${Header}
`

const H4 = Styled.h4`
  font-weight: 650;
  font-size: 1.5rem;
  ${Header}
`

const H5 = Styled.h5`
  font-weight: 600;
  font-size: 1.4rem;
  ${Header}
`

const H6 = Styled.h6`
  font-weight: 550;
  font-size: 1.2rem;
  ${Header}
`

export const TitleSC = {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
}
