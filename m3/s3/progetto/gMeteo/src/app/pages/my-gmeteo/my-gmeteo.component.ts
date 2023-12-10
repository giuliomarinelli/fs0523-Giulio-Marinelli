import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { iWeatherFiltered } from '../../Models/api/weather/i-weather-filtered';
import { LanguageService } from '../../services/language.service';
import { WeathersIconsManagerService } from '../../services/weathers-icons-manager.service';
import { AuthService } from '../../services/auth.service';
import { iAuthData } from '../../Models/auth/i-auth-data';
import { FavouritesService } from '../../services/favourites.service';
import { iFavourite } from '../../Models/i-favourite';
import { iFavouriteInput } from '../../Models/i-favourite-input';

@Component({
  selector: 'app-my-gmeteo',
  templateUrl: './my-gmeteo.component.html',
  styleUrl: './my-gmeteo.component.scss'
})
export class MyGmeteoComponent {
  constructor(private apiSvc: ApiService, private langSvc: LanguageService, private icoSvc: WeathersIconsManagerService,
    private authSvc: AuthService, private favouritesSvc: FavouritesService) { }
  wData!: iWeatherFiltered | null
  favourites: iFavourite[] = []
  isFavourite!: boolean
  ngOnInit() {
    this.apiSvc.wData$.subscribe(wData => {
      if (wData) {
        wData.city.sunrise *= 1000
        wData.city.sunset *= 1000
      }
      this.wData = wData
      if (this.user && this.wData) {
        this.favouritesSvc.isFavourite(7575755755756, 5).subscribe(res => {
          this.isFavourite = res
          console.log(this.isFavourite)
        })
        this.favouritesSvc.getFavourites(this.user.user.id).subscribe(res => {
          this.favourites = res
          console.log(this.favourites)
        })
      }
    })

    this.authSvc.user$.subscribe(res => {
      if (res) {
        this.user = res
        console.log(this.user)
      }
    })


  }




  user!: iAuthData
  userId!: number
  getIconPath(selector: string): string {
    return '../../../' + this.icoSvc.getPath(selector)
  }
  firstCapitalLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

}
