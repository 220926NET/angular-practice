import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  @Input() book: any = { key: '', title: ''};
  // @Input() title: string = "";

  constructor() { }
  now : Date = new Date()
  result : any;

  ngOnInit(): void {


  }




}
