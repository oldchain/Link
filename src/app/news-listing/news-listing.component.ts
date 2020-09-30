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
  selectedEvent = null;
  startPage = null;
  paginationLimit = null;
  loading = 1;
  searchText = {title:''};
  categoriesForm: FormGroup;
  constructor(private newsService: NewsService,private fb: FormBuilder,private router: Router) { }

  
  ngOnInit(): void {
    this.getNews();
    this.getCategories();
    //this method to pass the categories to the categoriedForm
    this.categoriesForm = this.fb.group({
      categoryControl: [this.categories]
    });
    this.startPage=0;
    this.paginationLimit=8;
  }

  //the function is to filter the news by the category comning from the dropdown list
  filterNews(e) {
    console.log(e.target.value);
    this.newsService.all()
      .subscribe(news => {
        if(!(e.target.value == "Show All")){
          this.articles = news['articles'].filter(article => article.sourceID == e.target.value);
        }else{
          this.articles = news['articles']
        } 
      });
  }


  showMoreItems()
  {
    this.newsService.all()
      .subscribe(news => {this.articles = news['articles'];
      });
     this.paginationLimit = Number(this.paginationLimit) + 4; //each time the showMoreItems is excuted the paginationLimit is passing 4 more indexes to access for the articles array
     this.articles.slice(this.startPage,this.paginationLimit);  //using .slice to access only from the 0 index to the paginationLimit index
  }

  getNews(){
    setTimeout(() => {
      this.newsService.all()
      .subscribe(news => {this.articles = news['articles'].slice(this.startPage,this.paginationLimit);
      this.loading = 0;
      });
    }, 500);
    }

  getCategories(){
    this.newsService.all()
      .subscribe(news => {this.categories = news['sourceCategory'];
      });
  }
  // this function to get the selected event to pass it tho the news details
  selectEvent(event) {
    this.selectedEvent = event;
    console.log(this.selectedEvent);
  }
}
