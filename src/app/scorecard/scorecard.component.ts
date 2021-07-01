import { Component, OnInit } from '@angular/core';
import { records } from '../dummy-data/students-marks';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {
  headers: string[];
  sortOrder = 'none';
  constructor() { }
  studentRecords = [...records];
  ngOnInit() {
    this.headers = Object.keys(this.studentRecords[0]);
  }

  getSortType() {
    if (this.sortOrder == 'none') {
      this.sortOrder = 'asc';
    }
    else if (this.sortOrder == 'asc') {
      this.sortOrder = 'desc';
    }
    else if (this.sortOrder == 'desc') {
      this.sortOrder = 'none';
    }
  }

  sortTable(header: any) {
    this.getSortType();
    if (this.sortOrder == 'asc') {
      this.studentRecords.sort((a, b) => a[header] > b[header] ? 1 : a[header] < b[header] ? -1 : 0); // For ascending sort
    } else if (this.sortOrder == 'desc') {
      this.studentRecords.sort((a, b) => a[header] < b[header] ? 1 : a[header] > b[header] ? -1 : 0); // For descending sort
    }
    else {
      this.studentRecords = [...records];
    }
  }
}
