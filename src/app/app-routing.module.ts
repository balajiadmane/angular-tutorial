import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './test-components/books/books.component';
import { Test1Component } from './test-components/test1/test1.component';
import { Test2Component } from './test-components/test2/test2.component';
import { Test3Component } from './test-components/test3/test3.component';
import { UserComponent } from './test-components/user/user.component';
const routes: Routes = [
       
  {
    path:'books',
    component:BooksComponent
  },
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'test1',
    component:Test1Component
  },
  {
    path:'test2',
    component:Test2Component
  },
  {
    path:'test3',
    component:Test3Component
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
