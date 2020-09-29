import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NewsService } from '../shared/services/news.service';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  

  constructor(private newsService: NewsService, private route: ActivatedRoute) { }
  sub = null;
  id= null;
  articles = null
  selected_article=null;
  
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      });
    this.getSelectedArticle();

  }
  getSelectedArticle(){
    this.newsService.all()
      .subscribe(news => {
        this.articles = news['articles'];
       
        this.selected_article = this.articles.find(article => {
          return article.id === parseInt(this.id)
        });
        console.log(this.selected_article);
      });

      
    }
  }
