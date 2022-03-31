import React from 'react'
import { IStarRatingProps } from './interface'
import { StarRatingSC } from './StarRating.styles'

const StarRating: React.FC<IStarRatingProps> = (props) => {
  const { score, styles } = props

  const calScore = () => {
    if (score * 20 > 100) {
      return 100
    }
    if (score * 20 < 0) {
      return 0
    }
    return score * 20
  }

  return (
    <StarRatingSC.Wrap>
      <StarRatingSC.BaseStars starBaseColor={styles?.starBaseColor}>
        ★★★★★
      </StarRatingSC.BaseStars>
      <StarRatingSC.StarFill score={calScore()} starColor={styles?.starColor}>
        ★★★★★
      </StarRatingSC.StarFill>
    </StarRatingSC.Wrap>
  )
}

export default StarRating
