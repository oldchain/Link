import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NewsService } from '../shared/services/news.service';


@Component({
  selector: 'app-news-listing',
  templateUrl: './news-listing.component.html',
  styleUrls: ['./news-listing.component.css']
})
export class NewsListingComponent implements OnInit {
  articles = null
  categories = null;
  filtered_news = null;
  categoriesForm: FormGroup;
  constructor(private newsService: NewsService,private fb: FormBuilder  ) { }

  
  ngOnInit(): void {
    this.getNews();
    this.getCategories();
    this.categoriesForm = this.fb.group({
      categoryControl: [this.categories]
    });
  }
  getNews(){
    this.newsService.all()
      .subscribe(news => {this.articles = news['articles'];
      });
    }
  getCategories(){
    this.newsService.all()
      .subscribe(news => {this.categories = news['sourceCategory'];
      });
      
  }
}
