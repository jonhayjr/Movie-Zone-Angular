import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.css']
})
export class FilterBoxComponent implements OnInit {

  search: string = '';
  validationAlert: boolean = false;

  @Output() searchEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  submitSearch() {
    if (this.search) {
      this.searchEvent.emit(this.search);
      this.search = '';
    } else {
      this.validationAlert = true;
    }
  }

  hideAlert() {
    this.validationAlert = false;
  }

}
