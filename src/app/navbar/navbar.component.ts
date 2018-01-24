import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'scm-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appTitle:string ='상품관리시스템';

  constructor() { }

  searchProduct(no:number){
    console.log(`search number:${no}`);
  }
  ngOnInit() {
  }

}
