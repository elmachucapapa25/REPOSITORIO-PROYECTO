import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginUser(credential: any){
    return new Promise((accept, reject) => {
    
    if(
     credential.email == 'oscar@gmail.com'
     && credential.password == '123456789'
    ){
    accept('Login correcto');
    }else{
     reject('Login incorrecto');
    
    }
    });
    }
    
    RegistroUser(){


    }
}
