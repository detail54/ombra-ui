import Styled from 'styled-components'
import { IStraRatingStyleProps } from './interface'

const Wrap = Styled.div`

`

const Stars = Styled.div`
  font-size: 14px;
`

const StarFill = Styled.div`
  font-size: 14px;
  color: #fa722e;
  width: ${(props: IStraRatingStyleProps) => `${props.count}%`};
`

export const StarRatingSC = {
  Wrap,
  Stars,
  StarFill,
}
