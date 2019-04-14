import { Component, OnInit } from '@angular/core';
import { CONSTANTS_YEAR } from './constants-year';

@Component({
  selector: 'app-date-solution',
  templateUrl: './date-solution.component.html',
  styleUrls: ['./date-solution.component.css']
})
export class DateSolutionComponent implements OnInit {

  public dateCurrently;
  public dateObtained: string;
  public year: string;
  public month: string;
  public monthsSelected;

  constructor() {
    this.monthsSelected = new Array();
    this.dateObtained = '2018-06-17';
    this.getDate();
    this.obtainYearAndMonth();
  }

  ngOnInit() {
  }

  public getDate(): void {
    this.dateCurrently = new Date();
    const newDate = new Date(this.dateObtained);
    CONSTANTS_YEAR.forEach((item, i) => {
      if (i >= newDate.getMonth()) {
        this.monthsSelected.push(item);
      }
    }
    );
  }

  public obtainYearAndMonth(): void {
    this.year = this.dateObtained.substring(0, 4);
    this.month = this.dateObtained.substring(5, 7);
  }

}
