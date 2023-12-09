import { iCity } from "./i-city"
import { iWeatherListTemp } from "./i-weather-list-temp"

export interface iWeatherTemp {
  list: iWeatherListTemp[]
  city: iCity
}
