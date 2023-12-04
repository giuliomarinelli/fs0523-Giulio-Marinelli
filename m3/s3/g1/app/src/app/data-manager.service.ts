import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IProducts } from './Models/iproducts';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  constructor(private http: HttpClient) { }

  endpoint: string = 'https://dummyjson.com/products'

  getAll():Observable<any> {
    return this.http.get(this.endpoint)
  }

}
