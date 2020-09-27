import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NewsService } from '../shared/services/news.service';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {
 
  
  @Input() articles;
  @Output() selected = new EventEmitter();

  constructor() { }
  ngOnInit(): void {
   
  }
}
