import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Library } from '../model/library.model';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http:HttpClient) { }

  getLibrary(): Observable<Library[]>{
    return this.http.get<Library[]>("http://localhost:8089/get");
  }

  postLibrary(library:Library): Observable<any>{
    return this.http.post<any>("http://localhost:8089/post",library);
  }
}