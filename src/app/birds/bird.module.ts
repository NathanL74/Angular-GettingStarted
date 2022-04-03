import { NgModule } from '@angular/core';
import { BirdListComponent } from './bird-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { BirdDetailsComponent } from './bird-details.component';
import { BirdDetailGuard } from './bird-detail.guard';



@NgModule({
  declarations: [
    BirdListComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'birds', component: BirdListComponent},
      { 
        path: 'birds/:id', 
       canActivate: [BirdDetailGuard],
       component: BirdDetailsComponent
      }
    ]),
    SharedModule
  ]
})
export class BirdModule { }
