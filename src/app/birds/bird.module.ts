import { NgModule } from '@angular/core';
import { BirdListComponent } from './bird-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    BirdListComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'birds', component: BirdListComponent},
      // { 
      //   path: 'birds/:id', 
      //  canActivate: [ProductDetailGuard],
      //  component: ProductDetailsComponent
      // }
    ]),
    SharedModule
  ]
})
export class BirdModule { }
