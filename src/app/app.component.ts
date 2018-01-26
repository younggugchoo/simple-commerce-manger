import { Component } from '@angular/core';
import { SidebarMenu } from './sidebar/sidebar.component';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';
import { ViewContainerRef } from '@angular/core/src/linker/view_container_ref';

@Component({
  selector: 'scm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scm works!!!';

  //currentMenu:SidebarMenu;

  constructor(private toastr:ToastsManager, vRef:ViewContainerRef){
    this.toastr.setRootViewContainerRef(vRef);
  }
}
