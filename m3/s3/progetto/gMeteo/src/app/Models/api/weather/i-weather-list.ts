import { iClouds } from "./i-clouds"
import { iWeatherMain } from "./i-weather-main"
import { iRain } from "./i-rain"
import { iSys } from "./i-sys"
import { iWeather } from "./i-weather"
import { iWind } from "./i-wind"

export interface iWeatherList {
  dt: number
  main: iWeatherMain
  weather: iWeather[]
  clouds: iClouds
  wind: iWind
  visibility: number
  pop: number
  rain?: iRain
  sys: iSys
  dt_txt: string
}
