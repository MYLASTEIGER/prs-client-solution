import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { HomeComponent } from './core/home/home.component';
import { ProductCreateComponent } from './prs/product/product-create/product-create.component';
import { ProductDetailComponent } from './prs/product/product-detail/product-detail.component';
import { ProductEditComponent } from './prs/product/product-edit/product-edit.component';
import { ProductListComponent } from './prs/product/product-list/product-list.component';
import { RequestCreateComponent } from './prs/request/request-create/request-create.component';
import { RequestDetailComponent } from './prs/request/request-detail/request-detail.component';
import { RequestEditComponent } from './prs/request/request-edit/request-edit.component';
import { RequestListComponent } from './prs/request/request-list/request-list.component';
import { UserCreateComponent } from './prs/user/user-create/user-create.component';
import { UserDetailComponent } from './prs/user/user-detail/user-detail.component';
import { UserEditComponent } from './prs/user/user-edit/user-edit.component';
import { UserListComponent } from './prs/user/user-list/user-list.component';
import { UserLoginComponent } from './prs/user/user-login/user-login.component';
import { User } from './prs/user/user.class';
import { VendorCreateComponent } from './prs/vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './prs/vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './prs/vendor/vendor-edit/vendor-edit.component';
import { VendorListComponent } from './prs/vendor/vendor-list/vendor-list.component';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},

  {path: "login", component: UserLoginComponent},

  {path: "user/list", component:UserListComponent},
  {path: "user/create", component: UserCreateComponent},
  {path: "user/detail/:id", component: UserDetailComponent}, 
  {path: "user/edit/:id", component: UserEditComponent},

  {path: "vendor/list", component:VendorListComponent},
  {path: "vendor/create", component: VendorCreateComponent},
  {path: "vendor/detail/:id", component: VendorDetailComponent}, 
  {path: "vendor/edit/:id", component: VendorEditComponent},

  {path: "product/list", component:ProductListComponent},
  {path: "product/create", component: ProductCreateComponent},
  {path: "product/detail/:id", component: ProductDetailComponent}, 
  {path: "product/edit/:id", component: ProductEditComponent},
  
  {path: "request/list", component:RequestListComponent},
  {path: "request/create", component: RequestCreateComponent},
  {path: "request/detail/:id", component: RequestDetailComponent}, 
  {path: "request/edit/:id", component: RequestEditComponent},

  {path: "**", component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
