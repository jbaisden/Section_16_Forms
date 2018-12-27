import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  token: string;

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (tk: string) => {
          this.token = tk
        }
      );
    return this.token;
  }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        (error) => {
          console.log("Error signupUser: ");
          console.log(error);
        }
      );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        (response) => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (tk: string) => {
                this.token = tk;
              }
            )
        }
      )
      .catch(
        (error) => {
          console.log("Error signinUser: ");
          console.log(error);
        }
      );
  }

  isAuthenticated() {
    return this.token != null;
  }

  logOut() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['signin']);
  }

}
