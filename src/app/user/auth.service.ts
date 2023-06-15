import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()
export class AuthService{
  currentUser:IUser | null = null

  loginUser(userName: string, password: string){
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName:'Balázs',
      lastName:'Gyenes'
    }
  }

  isAuthenticated(){
    return !!this.currentUser;
  }

  updateCurrentUser(firstName:string, lastName:string){
    if (this.currentUser){
      this.currentUser.firstName = firstName
      this.currentUser.lastName = lastName
    }
  }
}
