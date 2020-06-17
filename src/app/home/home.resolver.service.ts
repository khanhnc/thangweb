import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class HomeResolver implements Resolve<any> {


    constructor(private http: HttpClient) { }
    resolve(): Observable<any> {
        let resImg1 = this.http.get('/assets/images/ads/ads1.jpg', { responseType: 'blob' });
        let resImg2 = this.http.get('/assets/images/ads/ads2.jpg', { responseType: 'blob' });
        let resImg3 = this.http.get('/assets/images/ads/ads3.jpg', { responseType: 'blob' });
        let resImg4 = this.http.get('/assets/images/ads/ads4.jpg', { responseType: 'blob' });
        return forkJoin([resImg1, resImg2, resImg3, resImg4])
    }

}