import { iLocalNames } from "./i-local-names"

export interface iCityRes {
  name: string
  local_names: iLocalNames
  lat: number
  lon: number
  country: string
  state: string
}

