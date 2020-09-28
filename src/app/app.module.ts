import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SuccessCardComponent } from './success-card/success-card.component';
import { EventCardComponent } from './event-card/event-card.component';
import { FooterComponent } from './footer/footer.component';
import { NewsListingComponent } from './news-listing/news-listing.component';
import { HttpClientModule } from  '@angular/common/http';
import { NewsService } from './shared/services/news.service';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe'; // <-- Import




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SuccessCardComponent,
    EventCardComponent,
    FooterComponent,
    NewsListingComponent,
    NewsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FilterPipeModule
  ],
  providers: [
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
