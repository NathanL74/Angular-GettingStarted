import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { IBird } from "./bird";

@Injectable({
    providedIn: 'root'
})
export class BirdService {
    private birdURL = 'api/birds/birds.json';

    constructor(private http: HttpClient){}

    getBirds(): Observable<IBird[]>{
        return this.http.get<IBird[]>(this.birdURL).pipe(
            tap(data => console.log('All', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    // Get one bird
    // Since we are working with a json file, we can only retrieve all products
    // So retrieve all products and then find the one we want using 'map'
    getBird(id: number): Observable<IBird | undefined> {
        return this.getBirds()
        .pipe(
            map((birds: IBird[]) => birds.find(b => b.birdId === id))
        );
    }

    handleError(err: HttpErrorResponse){
        let errorMessage = '';
        if (err.error instanceof ErrorEvent){
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}
