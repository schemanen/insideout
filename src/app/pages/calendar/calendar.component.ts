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
	  "total": 64800,
	  "details": [{
	    "name": "Room 1",
	    "date": "2018-05-07 12:30:45",
	    "value": 21600
	  }, 
	  {
	    "name": "Room 2",
	    "date": "2018-05-07 13:37:00",
	    "value": 11800
	  },
	  {
	    "name": "Room 2",
	    "date": "2018-05-07 08:37:00",
	    "value": 11800
	  },
	  {
	    "name": "Room 3",
	    "date": "2018-05-07 17:52:41",
	    "value": 19600
	  }]
	}

	];
  
  constructor() { }

  ngOnInit() {

  }

}
