import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { iWeatherFiltered } from '../../Models/api/weather/i-weather-filtered';
import { ApiService } from '../../services/api.service';
import { iAuthData } from '../../Models/auth/i-auth-data';
import { FavouritesService } from '../../services/favourites.service';
import { iFavourite } from '../../Models/i-favourite';
import { iFavouriteInput } from '../../Models/i-favourite-input';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header-content-logged',
  templateUrl: './header-content-logged.component.html',
  styleUrl: './header-content-logged.component.scss'
})
export class HeaderContentLoggedComponent {


  constructor(private authSvc: AuthService, private router: Router, private apiSvc: ApiService,
    private favouritesSvc: FavouritesService) { }

  wData!: iWeatherFiltered | null
  user!: iAuthData
  favourites!: iFavourite[]
  isFavourite!: boolean
  favourite!: boolean
  ngOnInit() {

    this.favouritesSvc.favourite$.subscribe(res => {
      this.favourite = res
      if (this.favourite) {
        this.addDNone = 'd-none'
        this.delDNone = 'd-none'
      } else {
        this.addDNone = ''
        this.delDNone = ''
      }
    })

    this.apiSvc.wData$.subscribe(wData => {
      if (wData) {
        wData.city.sunrise *= 1000
        wData.city.sunset *= 1000
        console.log(wData)
        this.wData = wData
        if (this.wData) {
          this.favouritesSvc.isFavourite(this.wData.city.id, this.user.user.id).subscribe(res => {
            this.isFavourite = res
            console.log(res)
            console.log('ciao')
            if (this.isFavourite) {
              this.addDNone = 'd-none'
              this.delDNone = ''
            } else {
              this.addDNone = ''
              this.delDNone = 'd-none'
            }
          })
        }
      }


    })
    this.authSvc.user$.subscribe(res => {
      if (res) this.user = res
    })



    this.favouritesSvc.getFavourites(this.user.user.id).subscribe(res => { this.favourites = res; console.log(this.favourites) })


  }




  addFadeOut: string = ''
  delFadeOut: string = ''
  addFadeIn: string = ''
  delFadeIn: string = ''
  addDNone: string = ''
  delDNone: string = ''

  addToFavourites() {
    if (this.user && this.wData) {
      const newFavourite: iFavouriteInput = {
        cityId: this.wData.city.id,
        cityName: this.wData.city.name,
        userId: this.user.user.id,
        lat: this.wData.city.coord.lat,
        lon: this.wData.city.coord.lon
      }
      this.favouritesSvc.addToFavourites(newFavourite).subscribe(res => {
        if (res) {
          this.favourites.push(res)
          console.log(this.favourites)
          this.addFadeOut = 'fade-out-animation'

          setTimeout(() => {
            this.delDNone = ''
            this.addFadeOut = ''
            this.addDNone = 'd-none'
            this.delFadeIn = 'fade-in-animation'
            setTimeout(() => {
              this.delFadeIn = ''
            }, 200)
          }, 200)
        }
      })
    }
  }

  removeFromFavourites() {

    if (this.user && this.wData) {
      this.favouritesSvc.findIdFromUserAndCityData(this.wData.city.id, this.user.user.id).subscribe(res => {
        if (res) {
          this.favouritesSvc.removeFromFavourites(res).subscribe(res2 => {
            const ind = this.favourites.findIndex(fav => fav.id === res)
            this.favourites.splice(ind, 1)
            console.log(this.favourites)
            this.delFadeOut = 'fade-out-animation'
            setTimeout(() => {
              this.addDNone = ''
              this.delFadeOut = ''
              this.delDNone = 'd-none'
              this.addFadeIn = 'fade-in-animation'
              setTimeout(() => {
                this.addFadeIn = ''
              }, 200)
            }, 200)

          })
        }

      })
    }

  }

  logOut() {
    this.authSvc.logOut()
  }

}


