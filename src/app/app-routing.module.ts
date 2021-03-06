import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { RequestListComponent } from './feature/request/request-list/request-list.component';
import { RequestCreateComponent } from './feature/request/request-create/request-create.component';
import { RequestEditComponent } from './feature/request/request-edit/request-edit.component';
import { RequestDetailComponent } from './feature/request/request-detail/request-detail.component';
import { RequestLinesComponent } from './feature/request/request-lines/request-lines.component';
import { LineItemCreateComponent } from './feature/line-item/line-item-create/line-item-create.component';
import { LineItemEditComponent } from './feature/line-item/line-item-edit/line-item-edit.component';
import { RequestReviewComponent } from './feature/request/request-review/request-review.component';
import { RequestApproveComponent } from './feature/request/request-approve/request-approve.component';
import { AboutComponent } from './feature/static/about/about.component';
import { ResourcesComponent } from './feature/static/resources/resources.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: UserListComponent},
  {path: 'users/list', component: UserListComponent},
  {path: 'users/login', component: UserLoginComponent},
  {path: 'users/create', component: UserCreateComponent},
  {path: 'users/edit/:id', component: UserEditComponent},
  {path: 'users/detail/:id', component: UserDetailComponent},
  {path: 'vendors/list', component: VendorListComponent},
  {path: 'vendors/create', component: VendorCreateComponent},
  {path: 'vendors/edit/:id', component: VendorEditComponent},
  {path: 'vendors/detail/:id', component: VendorDetailComponent},
  {path: 'products/list', component: ProductListComponent},
  {path: 'products/create', component: ProductCreateComponent},
  {path: 'products/edit/:id', component: ProductEditComponent},
  {path: 'products/detail/:id', component: ProductDetailComponent},
  {path: 'requests/list', component: RequestListComponent},
  {path: 'requests/review/:id', component: RequestReviewComponent},
  {path: 'requests/approve/:id', component: RequestApproveComponent},
  {path: 'requests/create', component: RequestCreateComponent},
  {path: 'requests/edit/:id', component: RequestEditComponent},
  {path: 'requests/detail/:id', component: RequestDetailComponent},
  {path: 'requests/lines/:id', component: RequestLinesComponent},
  {path: 'line-items/create/:id', component: LineItemCreateComponent},
  {path: 'line-items/edit/:id', component: LineItemEditComponent},
  {path: 'static/about', component: AboutComponent},
  {path: 'static/resources', component: ResourcesComponent},
  {path: '**', component: UserLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
