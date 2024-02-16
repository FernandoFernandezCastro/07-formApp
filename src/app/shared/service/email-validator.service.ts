import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidator implements AsyncValidator{



    validate(control: AbstractControl):  Observable<ValidationErrors | null> {
      const email = control.value;

      console.log ({email});

      const httpCallObservable = new Observable<ValidationErrors | null>  ( (subscriber)=>{
        if ( email === 'fernando@google.com' ){
          subscriber.next({ emailtaken: true });
          subscriber.complete();
          return;
        }

        subscriber.next(null);
        subscriber.complete();
      }).pipe(
        delay(2000)
      );

      return httpCallObservable;

  }

  //validate(control: AbstractControl):  Observable<ValidationErrors | null> {
    //const email = control.value;

    //console.log ({email});

    //return of ({
      //emailTaken: true
    //}).pipe(
     // delay( 2000 )
    //);

    /*return this.http.get(`http://localhost:3000/users?q=${ email }`)
        .pipe(
          map( resp => {
            return ( resp.length === 0 )
              ? null
              : {emailTaken: true}
          })
        );*/

  

}
