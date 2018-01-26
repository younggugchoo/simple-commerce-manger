import { NgModule } from "@angular/core";
import { CategoryManagementComponent } from "./category-management/category-management.component";
import { Routes, RouterModule} from '@angular/router';


const routes:Routes = [
    {path:'category-list', component:CategoryManagementComponent}
];


@NgModule(
    {
        imports : [RouterModule.forChild(routes)],
        exports : [RouterModule]

    }
)

export class CategoryRoutingModule{}