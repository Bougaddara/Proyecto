import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/Operators'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import  {Iniciainterface} from '../interfaces/iniciaInterface'

const URL = environment.URL;

@Injectable({
  providedIn: 'root'
})
export class IniciaService {
  

  constructor(private http: HttpClient) { }
     headers : HttpHeaders  = new HttpHeaders ({

      "content-Type": "Application/JSON"

     });
     registerUser( name:string, email:string, password:string){
       const ruta = URL + 'user';
       return this.http.post <Iniciainterface>(ruta ,{ name: name,email:email, password:password },
        { headers:this.headers}
        ).pipe(map(data => data));
        
     }
     Iniciauser(email:string, password:string): Observable <any>{
      const ruta = URL + 'user/Inicia?include=user';

       return this.http.post<Iniciainterface>(ruta,{email:email, password:password},
        {headers:this.headers}
        ).pipe(map(data => data));
        }
        
        setUser(user: Iniciainterface):void {
          let user_string = JSON.stringify(user);
          localStorage.setItem("currentUser",user_string);

        }

        setToken(token: string){
          localStorage.setItem("accessToken", token);
        }

        getToken(){
          return localStorage.getItem("accessToken");
        }
        

      LogoutUser(){
        let accessToken = localStorage.getItem("accessToken");
        const ruta = URL + 'user/logout?access_token=${accessToken}';
        localStorage.removeItem('accessToken')
        localStorage.removeItem('currentUser')
        return this.http.post<Iniciainterface>(ruta,{headers:this.headers})
      }
     
}










