import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "../home/home.component";
import { RouterModule, Routes } from '@angular/router';
import { Page2Component } from "../page2/page2.component";
import { Page1Component } from "../page1/page1.component";
import { LoginComponent } from "../login/login.component";
import { SignUpComponent } from "../sign-up/sign-up.component";
import { NestedPage2Component } from "../nested-page2/nested-page2.component";
import { NestedPage1Component } from "../nested-page1/nested-page1.component";
import { NestedPage3Component } from "../nested-page3/nested-page3.component";
import { NestedPage4Component } from "../nested-page4/nested-page4.component";


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent , children: [
    { path: 'nestedPage1', component: NestedPage1Component },
    { path: 'nestedPage2', component: NestedPage2Component },
    { path: 'nestedPage3', component: NestedPage3Component },
    { path: 'nestedPage4', component: NestedPage4Component }
  ] },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'signUp', component: SignUpComponent },
  { path: 'login', component: LoginComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

 
  exports: [ RouterModule ],

  declarations: []
})
export class RoutingModule { }
