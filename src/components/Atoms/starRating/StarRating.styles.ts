import Styled, { css } from 'styled-components'
import { IStraRatingStyleProps } from './interface'

const Wrap = Styled.div`
  position: relative;
  font-size: 14px;
  display: inline-block;
`

const BaseStars = Styled.div`
  width: 100%;
  ${(props: IStraRatingStyleProps) => css`
    color: ${props.starColor || '#d1d5d9'};
  `}
`

const StarFill = Styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  ${(props: IStraRatingStyleProps) => css`
    width: ${props.score && props.score}%;
    color: ${props.starColor || '#ffe400'};
  `}
`

export const StarRatingSC = {
  Wrap,
  BaseStars,
  StarFill,
}
