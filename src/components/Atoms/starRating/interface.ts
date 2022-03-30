export interface IStraRatingStyleProps {
  count: number
  starColor?: string
}

export interface IStarRatingProps {
  starCount: number
  totalCount: number
  style?: IStraRatingStyleProps
}
