import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBooksIssuedComponent } from './components/all-books-issued/all-books-issued.component';
import { FormPageComponent } from './components/form-page/form-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:"", component:HomePageComponent
  },
  {
    path:"form-page", component:FormPageComponent
  },
  {
    path:"all-books", component:AllBooksIssuedComponent
  },
  {
    path:"**", component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
