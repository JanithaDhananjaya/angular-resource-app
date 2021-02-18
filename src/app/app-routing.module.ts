import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ViewCustomerListComponent} from './components/customer/view-customer-list/view-customer-list.component';
import {AddCustomerComponent} from './components/customer/add-customer/add-customer.component';
import {UpdateCustomerComponent} from './components/customer/update-customer/update-customer.component';
import {ViewCustomerDetailsComponent} from './components/customer/view-customer-details/view-customer-details.component';


const routes: Routes = [
  {path: '', redirectTo: 'customer', pathMatch: 'full'},
  {path: 'customers', component: ViewCustomerListComponent},
  {path: 'add', component: AddCustomerComponent},
  {path: 'update/:id', component: UpdateCustomerComponent},
  {path: 'details/:id', component: ViewCustomerDetailsComponent},
  { path: 'items', loadChildren: () => import('./items/items.module').then(m => m.ItemsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
