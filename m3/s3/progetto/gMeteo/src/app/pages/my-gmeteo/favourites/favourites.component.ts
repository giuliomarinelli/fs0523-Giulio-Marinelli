import { Component } from '@angular/core';
import { iFavourite } from '../../../Models/i-favourite';
import { ApiService } from '../../../services/api.service';
import { WeathersIconsManagerService } from '../../../services/weathers-icons-manager.service';
import { AuthService } from '../../../services/auth.service';
import { FavouritesService } from '../../../services/favourites.service';
import { iAuthData } from '../../../Models/auth/i-auth-data';
import { iCoord } from '../../../Models/api/weather/i-coord';
import { iCurrentWeather } from '../../../Models/api/weather/current/i-current-weather';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.scss'
})
export class FavouritesComponent {

  constructor(private apiSvc: ApiService, private icoSvc: WeathersIconsManagerService,
    private authSvc: AuthService, private favouritesSvc: FavouritesService) { }

  favourites: iFavourite[] = []
  favouritesWeathers: iCurrentWeather[] = []
  user!: iAuthData
  gotUser: boolean = false
  gotWeather: boolean = false
  ngOnInit() {
    this.authSvc.user$.subscribe(res => {
      if (res) {
        this.user = res
        this.gotUser = true
      }
    })
    if (this.user) {
      this.favouritesSvc.getFavourites(this.user.user.id).subscribe(res => {
        this.favourites = res
        console.log(this.favourites)
        this.favourites.forEach((el: iFavourite) => {
          const coord: iCoord = {
            lat: el.lat,
            lon: el.lon
          }
          this.apiSvc.getCurrentWeatherData(coord, 'it').subscribe(res => this.favouritesWeathers.push(res))
        })
        this.gotWeather = true
      })
    }

  }

  firstCapitalLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  getIconPath(selector: string): string {
    let path!: string
    try {
      path = '../../../../' + this.icoSvc.getPath(selector)
    } catch {
      (Error)
    }
    return path
}

removeFromFavourites(favId: number) {
  this.favouritesSvc.removeFromFavourites(favId).subscribe(res => {
    const ind = this.favourites.findIndex(fav => fav.id === favId)
    this.favourites.splice(ind, 1)
    this.favouritesWeathers.splice(ind, 1)
  })


}

}
