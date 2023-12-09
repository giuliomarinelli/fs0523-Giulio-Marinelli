import { iCity } from "./i-city"
import { iWeatherListFinal } from "./i-weather-list-final"


export interface iWeatherFinal {
  list: iWeatherListFinal[]
  city: iCity
}
