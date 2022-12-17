import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{
  path: 'slots',
  loadChildren:() => import('./components/slots/slots.module').then(m => m.SlotsModule)
},
  {
    path: '',
    redirectTo: '/slots',
    pathMatch: 'full',
  },
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
