import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './Component/customers/customers.component';

const routes: Routes = [
  {path:' ',redirectTo:'customers',pathMatch:'full'},
  {path:'customers',component:CustomersComponent,title:"customers"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
