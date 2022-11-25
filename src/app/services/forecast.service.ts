import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import forecast from "../../assets/json/forecast_fake.json";
import { map, throwError, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(
    /* private http: HttpClient */
  ) { }

  getForecast() {
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
            return forecast;
  }
}
