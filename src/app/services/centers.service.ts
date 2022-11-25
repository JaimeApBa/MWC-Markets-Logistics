import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import centers from "../../assets/json/centers_fake.json";
import { map, throwError, catchError } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor(private httpClient: HttpClient) { }
  
}

@Injectable({
  providedIn: 'root'
})
export class CentersService {

  constructor(
    private http: HttpClient
  ) { }

getCenters() {
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
            return centers;
}

}
