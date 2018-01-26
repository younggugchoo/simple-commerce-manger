import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryManagementComponent } from './category-management/category-management.component';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryDetailComponent } from './category-detail/category-detail.component';

@NgModule({
  imports: [
    CommonModule, CategoryRoutingModule
  ],
  declarations: [CategoryManagementComponent, CategoryDetailComponent],
  exports :[CategoryManagementComponent]
})
export class CategoryModule { }
