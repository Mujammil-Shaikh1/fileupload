import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  postdata(data:any)
  {

    return this.http.post("http://a2zinfotechs.com/upload_student.php",data)
  }
}
