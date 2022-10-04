import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { AngularFireStorage } from '@angular/fire/compat/storage';


export interface UserPhoto {
  filepath: string;
  webviewPath: string;
}



@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: UserPhoto[] = [];

  constructor(private store : AngularFireStorage ) { }

  public async addNewToGallery() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
    this.photos.unshift({
      filepath: "soon...",
      webviewPath: capturedPhoto.webPath
    });
  }

  private async savePicture(photo: Photo) {
    const base64Data = await this.readAsBase64(photo);



    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    });
    //     this.store.upload('hghgjk',savedFile).then((res) => {
    //   console.log('image uploaded?',res);
    // } )
  
    // Use webPath to display the new image instead of base64 since it's
    // already loaded into memory
    return {
      filepath: fileName,
      webviewPath: photo.webPath
    };
   }
  // uploadPhotoToFirebase() {
  //   console.log(JSON.stringify(this.photos[0].webviewPath));
  //   this.store.upload('hghgjk',this.photos[0].webviewPath).then((res) => {
  //     console.log('image uploaded?',res);
  //   } )
  // }
  private async readAsBase64(photo: Photo) {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
  
    return await this.convertBlobToBase64(blob) as string;
  }
  private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
        resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });
}
