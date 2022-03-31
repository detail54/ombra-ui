export interface IStraRatingStyleProps {
  score?: number
  starColor?: string
  starBaseColor?: string
}

export interface IStarRatingProps {
  score: number
  styles?: IStraRatingStyleProps
}
