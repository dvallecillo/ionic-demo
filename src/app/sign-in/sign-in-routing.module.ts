import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SignInPage } from './sign-in.page';

const routes: Routes = [
  {
    path: '',
    component: SignInPage,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
  exports: [RouterModule],
})
export class SignInPageRoutingModule {}
