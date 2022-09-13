import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";




@Injectable({
    providedIn:'root'
})
export class APIService {

    private url:string  = 'https://dummyjson.com';

    constructor(
        private http:HttpClient
    ){

    }
    
    getUsers(username:string) : Observable<any> {
        return this.http.get(`${this.url}/users/search?q=${username}`)
    }
}