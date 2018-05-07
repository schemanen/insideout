import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  overview = 'day';
  data = [
	{
	  "date": "2018-05-07",
	  "total": 8000,
	  "details": [{
	    "name": "Room 1",
	    "date": "2018-05-07 12:30:45",
	    "value": 9192
	  }, 
	  {
	    "name": "Room 2",
	    "date": "2018-05-07 13:37:00",
	    "value": 6753
	  },
	  {
	    "name": "Room 3",
	    "date": "2018-05-07 17:52:41",
	    "value": 1219
	  }]
	}

	];
  
  constructor() { }

  ngOnInit() {

  }

}
