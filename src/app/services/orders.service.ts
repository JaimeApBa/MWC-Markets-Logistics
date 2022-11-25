import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import orders from "../../assets/json/orders_fake.json";
import { map, throwError, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(
    /* private http: HttpClient */
    ) { }

  getOrders() {
    /*
    const url = '';
    return this.http.get(url)
            .pipe(
              map((resp => {
                console.log(resp);
                
              }),
              catchError((err: any) => {
                return throwError(() => new Error(err));
              }))
            )  */
            return orders;
  }
}
