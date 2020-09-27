import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NewsService } from '../shared/services/news.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  articles = null
  home_articles = [];
  constructor(private router: Router,private newsService: NewsService) { }

  ngOnInit(): void {
    this.getNews();
    
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }

  getNews(){
    this.newsService.all()
      .subscribe(news => {this.articles = news['articles'];
          console.log(this.articles);
          this.articles.forEach(article => {
            if(article.showOnHomepage === true){
              this.home_articles.push(article);
            }
          });
          console.log(this.home_articles.sort());
      });
  }
}
