import { iFavourite } from "../i-favourite"

export interface iUser {
  name: string | null
  surname: string | null
  email: string | null
  phoneNumber: string | null
  dateOfBirth: string | null
  gender: string | null
  password: string | null
  id: number
  favourites: iFavourite[]
}
