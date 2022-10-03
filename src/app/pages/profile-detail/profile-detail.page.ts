import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from 'src/app/services/photo.service';



export interface profileData {
  name:string,
  imgUrl:string
}
@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.page.html',
  styleUrls: ['./profile-detail.page.scss'],
})

export class ProfileDetailPage implements OnInit {

  data = {
    name:'',
    imgUrl:''
  }

  constructor(private router: ActivatedRoute,public photoService : PhotoService,private storage : AngularFireStorage) { }

  ngOnInit() {
    this.router.params.subscribe((res:profileData) => {
      this.data.name = res.name;
      this.data.imgUrl = res.imgUrl;
    })
  }

  getFile(event:any) {
    const file = event.target?.files[0];
    console.log(file);
    this.storage.upload('demo',file).then((res) => {
      console.log('file uploaded?',res);
    })
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

}
