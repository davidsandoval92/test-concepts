import { Component, OnInit } from '@angular/core';

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
  public months = [
    { id: 0, name: 'ENERO' },
    { id: 1, name: 'FEBRERO' },
    { id: 2, name: 'MARZO' },
    { id: 3, name: 'ABRIL' },
    { id: 4, name: 'MAYO' },
    { id: 5, name: 'JUNIO' },
    { id: 6, name: 'JULIO' },
    { id: 7, name: 'AGOSTO' },
    { id: 8, name: 'SEPTIEMBRE' },
    { id: 9, name: 'OCTUBRE' },
    { id: 10, name: 'NOVIEMBRE' },
    { id: 11, name: 'DICIEMBRE' },
  ];
  public readonly MONTHS = 12;

  constructor() {
    this.dateObtained = '2018-12-17';
    this.getDate();
    this.obtainYearAndMonth();
  }

  ngOnInit() {
  }

  public getDate(): void {
    this.dateCurrently = new Date();
    console.log('Date currently: ' + this.dateCurrently);
    console.log(this.dateCurrently.getMonth() + 1);
    console.log(this.dateObtained);
    const newDate = new Date(this.dateObtained);
    console.log(newDate.getMonth() + 1);
    console.log(this.months[newDate.getMonth()].name);

    this.months.forEach((item, i) => {
      if (i >= newDate.getMonth()) {
        console.log(item.name);
      }
    }
    );
    console.log(newDate.getFullYear());
  }

  public obtainYearAndMonth(): void {
    this.year = this.dateObtained.substring(0, 4);
    this.month = this.dateObtained.substring(5, 7);
  }

}