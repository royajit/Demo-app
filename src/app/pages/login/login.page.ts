import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators, FormBuilder, } from '@angular/forms';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  profileForm :FormGroup;
  

  constructor(private router:Router) { }

  ngOnInit() {
    this.profileForm = new FormGroup({
      Email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',Validators.required),
    });
 
  }
  onSubmit(){
    console.warn(this.profileForm.value); 
  }
  navigate(){
    this.router.navigate(['home'])
  }
}
