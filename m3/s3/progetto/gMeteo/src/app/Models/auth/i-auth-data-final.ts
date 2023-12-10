import { iFavourite } from "../i-favourite";
import { iUser } from "./i-user";

export interface iAuthDataFinal {
  accessToken: string
  user: iUser
  favourites: iFavourite[]
}
