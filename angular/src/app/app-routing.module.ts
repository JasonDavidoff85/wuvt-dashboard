import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPSAComponent } from './add-psa/add-psa.component';
import { DjComponent } from './dj/dj.component';
import { ListenerComponent } from './listener/listener.component';

const routes: Routes = [
  {path: '', component: ListenerComponent},
  {path: 'dj', component: DjComponent},
  {path: 'psa', component: AddPSAComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
