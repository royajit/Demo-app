import { Component, OnInit } from '@angular/core';
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

  constructor(private router: ActivatedRoute,private photoService : PhotoService) { }

  ngOnInit() {
    this.router.params.subscribe((res:profileData) => {
      this.data.name = res.name;
      this.data.imgUrl = res.imgUrl;
    })
  }
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
  getFile(event: any) {
    console.log(event.target.files);
  }

}
