import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { iWeatherFiltered } from '../../Models/api/weather/i-weather-filtered';
import { WeathersIconsManagerService } from '../../services/weathers-icons-manager.service';
import { AuthService } from '../../services/auth.service';
import { iAuthData } from '../../Models/auth/i-auth-data';
import { FavouritesService } from '../../services/favourites.service';
import { iFavourite } from '../../Models/i-favourite';
import { ActivatedRoute, Router } from '@angular/router';
import { iCoord } from '../../Models/api/weather/i-coord';

@Component({
  selector: 'app-my-gmeteo',
  templateUrl: './my-gmeteo.component.html',
  styleUrl: './my-gmeteo.component.scss'
})
export class MyGmeteoComponent {

  constructor(private apiSvc: ApiService, private icoSvc: WeathersIconsManagerService,
    private authSvc: AuthService, private favouritesSvc: FavouritesService, private route: ActivatedRoute,
    private router: Router) { }

  wData!: iWeatherFiltered | null
  favourites: iFavourite[] = []
  isFavourite!: boolean
  favourite!: boolean
  ngOnInit() {


    this.favouritesSvc.currentRoute.next(this.router.url)

    this.apiSvc.wSubject.next(null)

    this.authSvc.user$.subscribe(res => {
      if (res) {
        this.user = res
      }
    })

    this.apiSvc.wData$.subscribe(wData => {
      if (wData) {

        wData.city.sunrise *= 1000
        wData.city.sunset *= 1000
      }
      this.wData = wData
      if (this.user && this.wData) {
        this.favouritesSvc.isFavourite(this.wData.city.id, this.user.user.id).subscribe(res => {
          this.isFavourite = res

        })
        this.favouritesSvc.getFavourites(this.user.user.id).subscribe(res => {
          this.favourites = res
        })
      } else if (this.user) {
        this.route.params.subscribe((params: any) => {
          if (params.id) this.favouritesSvc.getFavouriteById(params.id).subscribe(res => {
            const coord: iCoord = {
              lat: res.lat,
              lon: res.lon
            }
            this.apiSvc.get5d3hWeatherForecast(coord, 'it').subscribe(data => {
              this.apiSvc.wSubject.next(data)
            })
          })
        })
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

  ngOnDestroy() {
    this.apiSvc.wSubject.next(null)
  }


}
