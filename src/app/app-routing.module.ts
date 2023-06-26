import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsCatalogComponent } from './components/news-catalog/news-catalog.component';
import { NewsComponent } from './components/news/news.component';

const routes: Routes = [
  {
    path: "",
    component: NewsCatalogComponent,
  },
  {
    path: "news/:id",
    component: NewsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
