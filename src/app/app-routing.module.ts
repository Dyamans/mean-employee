import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpAddComponent } from './emp-add/emp-add.component';
import { EmpEditComponent } from './emp-edit/emp-edit.component';
import { EmpGetComponent } from './emp-get/emp-get.component';

const routes: Routes = [
  {
    path: 'emp/create',
    component: EmpAddComponent
  },
  {
    path: 'emp/edit/:id',
    component: EmpEditComponent
  },
  {
    path: 'emp',
    component: EmpGetComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
