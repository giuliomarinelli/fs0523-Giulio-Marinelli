import { iCity } from "./i-city"
import { iWeatherList } from "./i-weather-list"

export interface iWeatherFiltered {
  list: iWeatherList[]
  city: iCity
}
