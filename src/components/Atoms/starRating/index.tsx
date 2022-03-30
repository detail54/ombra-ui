import React, { useEffect } from 'react'
import { IStarRatingProps } from './interface'
import { StarRatingSC } from './StarRating.styles'

const StarRating: React.FC<IStarRatingProps> = (props) => {
  const { starCount, totalCount } = props

  const starLength = Array.from(
    { length: starCount },
    (value: number, index: number) => index,
  )

  let stars = ''

  useEffect(() => {
    starLength.forEach((value: number) => {
      stars += '★'
    })
  }, [])

  return (
    <StarRatingSC.Wrap>
      <StarRatingSC.Stars>{stars}</StarRatingSC.Stars>
      <StarRatingSC.StarFill>{stars}</StarRatingSC.StarFill>
    </StarRatingSC.Wrap>
  )
}

export default StarRating
