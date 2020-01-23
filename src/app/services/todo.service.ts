import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  add(name,description){
    return this.http.post(`${baseUrl}create`,{
      name,
      description
    }, 
    {withCredentials: true});
  }
  edit(id,name,description){
    return this.http.put(`${baseUrl}edit/${id}`,{
      name,
      description
    });
  }
  get(){
    return this.http.get(baseUrl,{
      withCredentials: true
    });
  }
  getById(id){
    return this.http.get(`${baseUrl}todo/${id}`);
  }
  delete(id){
    return this.http.delete(`${baseUrl}delete/${id}`);
  }
}
