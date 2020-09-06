import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class HomeResolver implements Resolve<any> {

    constructor(private http: HttpClient) { }
    resolve(): Observable<any> {
        let resImg1 = this.http.get('/assets/images/qcs/qc1.jpg', { responseType: 'blob' });
        let resImg2 = this.http.get('/assets/images/qcs/qc2.jpg', { responseType: 'blob' });
        let resImg5 = this.http.get('/assets/images/qcs/qc5.jpg', { responseType: 'blob' });
        let resImg6 = this.http.get('/assets/images/qcs/qc6.jpg', { responseType: 'blob' });
        let resImg7 = this.http.get('/assets/images/qcs/qc7.jpg', { responseType: 'blob' });
        let resImg8 = this.http.get('/assets/images/qcs/qc8.jpg', { responseType: 'blob' });
        return forkJoin([resImg1, resImg2,resImg5, resImg6, resImg7, resImg8])
    }

}