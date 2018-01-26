import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule} from '@angular/router';

const CORE_COMPONENTS = [NavbarComponent,
  SidebarComponent,
  FooterComponent,
  PageNotFoundComponent,
  MainDashboardComponent
];

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: CORE_COMPONENTS, 
  exports :CORE_COMPONENTS
})
export class ScmMainModule { }
