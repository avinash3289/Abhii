import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  
  public supplier(sup):Observable<any>{
    return this.http.post("http://localhost:3000/suppli",sup);
 }
 public supreg(sdata):Observable<any>{
  return this.http.post("http://localhost:3000/sregister",sdata);
 }
 public usereg(udata):Observable<any>{
    return this.http.post("http://localhost:3000/uregister",udata);
 } 
 public uslog(ulogin):Observable<any>{
     return this.http.post("http://localhost:3000/uloger",ulogin);
 }

}
