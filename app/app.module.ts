import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing/routing.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { NestedPage1Component } from './nested-page1/nested-page1.component';
import { NestedPage2Component } from './nested-page2/nested-page2.component';
import { NestedPage3Component } from './nested-page3/nested-page3.component';
import { NestedPage4Component } from './nested-page4/nested-page4.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    Page1Component,
    Page2Component,
    SignUpComponent,
    LoginComponent,
    NestedPage1Component,
    NestedPage2Component,
    NestedPage3Component,
    NestedPage4Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
