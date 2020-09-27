import { Component, Input, OnInit } from '@angular/core';
import { NewsService } from '../shared/services/news.service';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {
 
  @Input() articles;
  constructor() { }
  ngOnInit(): void {
   
  }

}
