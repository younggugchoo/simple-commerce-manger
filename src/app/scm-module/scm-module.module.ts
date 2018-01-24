import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  ],
  exports :[
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  ]
})
export class ScmModuleModule { }
