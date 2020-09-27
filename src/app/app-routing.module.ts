import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NewsListingComponent } from './news-listing/news-listing.component';


const routes: Routes = [ 
  { path: '' , redirectTo:'/home',pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'news', component: NewsListingComponent },
  { path: 'newsdetails/:id', component: NewsDetailsComponent},
  { path: '**', component: HomeComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
