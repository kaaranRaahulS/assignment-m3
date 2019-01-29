import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder , FormControl , Validators } from '@angular/forms';

import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    myForm:FormGroup;
    message:string = "";
    usererror:any;

  constructor(private fb : FormBuilder) { 
    this.myForm = this.fb.group({
      email:['',[Validators.required]],
      password:['',[Validators.required, Validators.minLength(8)]],
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]]

    })
  }
  onSubmit(like)
  {
    let email:string = like.value.email;
    let password:string = like.value.password;
    let firstName:string = like.value.firstName;
    let lastName:string = like.value.lastName;
    firebase.auth().createUserWithEmailAndPassword(email,password).then((response) =>
    {
      console.log(response);
      let randomnumber = Math.floor(Math.random()*1000)
      response.user.updateProfile(
        {
          displayName:firstName+" "+lastName,
          photoURL:"https://api.adorable.io/avatars/"+randomnumber
        }
        
      ).then(()=>
      {
        this.message="You have registered successfully."
      })

    }).catch((error)=>
    {
      console.log(error);
      this.usererror=error;
    })
  }

  ngOnInit() {
  }

}
