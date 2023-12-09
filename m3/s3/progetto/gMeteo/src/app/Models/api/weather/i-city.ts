import { iCoord } from "./i-coord"

export interface iCity {
  id: number
  name: string
  coord: iCoord
  country: string
  population: number
  timezone: number
  sunrise: number
  sunset: number
}
