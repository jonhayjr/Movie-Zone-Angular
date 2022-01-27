import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.css']
})
export class FilterBoxComponent implements OnInit {

  search: string = '';

  @Output() searchEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  submitSearch() {
    this.searchEvent.emit(this.search)
  }

}
