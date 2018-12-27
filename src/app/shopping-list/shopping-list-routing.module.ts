import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';

const shoppingListRoutes: Routes = [
  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(shoppingListRoutes)
  ],
  exports: [RouterModule]
})
export class ShoppingListRoutingModule { }
