import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileDetailPageRoutingModule } from './profile-detail-routing.module';

import { ProfileDetailPage } from './profile-detail.page';
import { FileSizePipe } from 'src/app/services/file-size.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileDetailPageRoutingModule
  ],
  declarations: [ProfileDetailPage,FileSizePipe]
})
export class ProfileDetailPageModule {}
