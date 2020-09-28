import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NewsService } from '../shared/services/news.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-news-listing',
  templateUrl: './news-listing.component.html',
  styleUrls: ['./news-listing.component.css']
})
export class NewsListingComponent implements OnInit {
  articles = [];
  categories = null;
  filtered_news = null;
  selectedEvent = null;
  startPage = null;
  paginationLimit = null;
  categoriesForm: FormGroup;
  constructor(private newsService: NewsService,private fb: FormBuilder,private router: Router) { }

  
  ngOnInit(): void {
    this.getNews();
    this.getCategories();
    this.categoriesForm = this.fb.group({
      categoryControl: [this.categories]
    });
    this.startPage=0;
    this.paginationLimit=8;
  }

  showMoreItems()
  {
    this.newsService.all()
      .subscribe(news => {this.articles = news['articles'];
      });
     this.paginationLimit = Number(this.paginationLimit) + 4;
     console.log("button fired");
     this.articles.slice(this.startPage,this.paginationLimit); 
  }
  getNews(){
    this.newsService.all()
      .subscribe(news => {this.articles = news['articles'].slice(this.startPage,this.paginationLimit);
      });
    }
  getCategories(){
    this.newsService.all()
      .subscribe(news => {this.categories = news['sourceCategory'];
      });
  }
  selectEvent(event) {
    this.selectedEvent = event;
    console.log(this.selectedEvent);
  }
}
