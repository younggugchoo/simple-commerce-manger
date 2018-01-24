import { Component, OnInit, EventEmitter, Output } from '@angular/core';




export declare type SidebarMenu = 'not selected' | 'product' | 'category';
@Component({
  selector: 'scm-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  currentMenu:SidebarMenu;

  @Output() changedMenu:EventEmitter<string> = new EventEmitter();
  constructor() { }

  clickedMenu(menu:SidebarMenu){
    this.currentMenu = menu;
    this.changedMenu.emit(menu); //event fire~~
  }

  ngOnInit() {
  }

}
