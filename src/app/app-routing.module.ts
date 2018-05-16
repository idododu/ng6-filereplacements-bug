import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { HomeAComponent } from './home-a/home-a.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeAComponent },
  {
    path: '**', // fallback router must in the last
    redirectTo: '',
  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}