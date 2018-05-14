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
	  "date": "2018-05-14",
	  "total": 64800,
	  "details": [{
	    "name": "Coffee Machine area",
	    "date": "2018-05-14 12:30:45",
	    "value": 21600
	  }, 
	  {
	    "name": "Sheldon Coopers spot",
	    "date": "2018-05-14 13:37:00",
	    "value": 11800
	  },
	  {
	    "name": "Sheldon Coopers spot",
	    "date": "2018-05-14 08:37:00",
	    "value": 11800
	  },
	  {
	    "name": "Jockes office",
	    "date": "2018-05-14 17:52:41",
	    "value": 19600
	  }]
	}

	];
  
  constructor() { }

  ngOnInit() {

  }

}
