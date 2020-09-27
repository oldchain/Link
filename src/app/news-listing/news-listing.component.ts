import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/services/news.service';


@Component({
  selector: 'app-news-listing',
  templateUrl: './news-listing.component.html',
  styleUrls: ['./news-listing.component.css']
})
export class NewsListingComponent implements OnInit {
  articles = null
  constructor(private newsService: NewsService  ) { }

  ngOnInit(): void {
    this.getNews();
  }
  getNews(){
    this.newsService.all()
      .subscribe(news => {this.articles = news['articles'];
      });
  }
}
