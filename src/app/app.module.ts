import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { ScmMainModule } from './scm-main/scm-main.module';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import {AngularFireAuthModule} from 'angularfire2/auth';
import { SharedModule } from './shared/shared.module';
import {ToastModule, ToastOptions} from 'ng2-toastr';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CustomToastOptions } from './custom-toast-options';



@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    
    ScmMainModule,
    ProductModule,
    CategoryModule,
    AppRoutingModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule, //firebase google 계정로그인 설정
    SharedModule,
    ToastModule.forRoot()


  ],
  providers: [
    {provide:ToastOptions, useClass:CustomToastOptions}
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
