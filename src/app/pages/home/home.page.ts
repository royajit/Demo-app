import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, } from '@angular/forms';
import { NavParams, ModalController } from '@ionic/angular';
import { Route, Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  // profileForm :FormGroup;
  arr = [
    {
      name:"John Doe",
      imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK_vjpKVAjkub5O0sFL7ij3mIzG-shVt-6KKLNdxq4&s'
    },
    {
      name:"Vishnu Sharma",
      imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpyxfHk-2-yfIdBw1xU9GJoDdSub0CgxSDIZJLI0CWypYI0EXhlXAhiA-hDpjtHXPLe1E&usqp=CAU'
    },
    {
      name:"Krishna Verma",
      imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdugPcXoHSFlIBfr3h_qJc6RUlNEy1CB_mFw64nVY&s'
    },
    {
      name:"Krishna Verma",
      imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdugPcXoHSFlIBfr3h_qJc6RUlNEy1CB_mFw64nVY&s'
    },
  ];
  constructor(private router : Router) { }

  ngOnInit() {
  }

  navigate(imgUrl:any,name:string){
    this.router.navigate(['profile-detail',name,imgUrl])
  }
}


