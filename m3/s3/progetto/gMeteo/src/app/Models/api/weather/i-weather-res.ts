import { iCity } from "./i-city"
import { iWeatherList } from "./i-weather-list"

export interface iWeatherRes {
  cod: string
  message: number
  cnt: number
  list: iWeatherList[]
  city: iCity
}
