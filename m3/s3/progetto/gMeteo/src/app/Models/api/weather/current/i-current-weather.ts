import { iClouds } from "../i-clouds"
import { iCoord } from "../i-coord"
import { iSys } from "../i-sys"
import { iWeather } from "../i-weather"
import { iWeatherMain } from "../i-weather-main"
import { iWind } from "../i-wind"

export interface iCurrentWeather {
  coord: iCoord
  weather: iWeather[]
  base: string
  main: iWeatherMain
  visibility: number
  wind: iWind
  rain: iRain
  clouds: iClouds
  dt: number
  sys: iSys
  timezone: number
  id: number
  name: string
  cod: number
}


export interface iRain {
  "1h": number
}

