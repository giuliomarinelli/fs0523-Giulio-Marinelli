import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { iFavourite } from '../Models/i-favourite';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { iFavouriteInput } from '../Models/i-favourite-input';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  constructor(private http: HttpClient) { }

  currentRoute = new Subject<string>()
  currentRoute$ = this.currentRoute.asObservable()

  endpoint: string = `${environment.backendUrl}`

  isFavourite(cityId: number, userId: number): Observable<boolean> {
    return this.http.get<iFavourite[]>(`${this.endpoint}/favourites`).pipe(map(res => {
      const favouriteFinded = res.find(fav => fav.cityId === cityId && fav.userId === userId)
      if (favouriteFinded) return true
      return false
    }))
  }
  getFavourites(userId: number): Observable<iFavourite[]> {
    return this.http.get<iFavourite[]>(`${this.endpoint}/favourites`).pipe(map(res => {
      return res.filter(fav => fav.userId === userId)
    }))
  }



  addToFavourites(favourite: iFavouriteInput): Observable<iFavourite> {
    return this.http.post<iFavourite>(`${this.endpoint}/favourites`, favourite)
  }

  removeFromFavourites(id: number) {
    return this.http.delete<iFavourite>(`${this.endpoint}/favourites/${id}`)
  }

  findIdFromUserAndCityData(cityId: number, userId: number): Observable<number | null> {
    return this.http.get<iFavourite[]>(`${this.endpoint}/favourites`).pipe(map(res => {
      const founded = res.find(fav => fav.cityId === cityId && fav.userId === userId)
      if (founded) return founded.id
      return null
    }))
  }

  getFavouriteById(favId: number): Observable<iFavourite> {
    return this.http.get<iFavourite>(`${this.endpoint}/favourites/${favId}`)
  }


}
