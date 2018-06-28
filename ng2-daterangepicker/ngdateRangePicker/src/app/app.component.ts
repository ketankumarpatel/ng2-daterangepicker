import { Component } from '@angular/core';
import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public daterange: any = {};

  // see original project for full list of options
  // can also be setup using the config service to apply to multiple pickers
  public options: any = {
    locale: {
      // format: 'YYYY-MM-DD'
      cancelLabel: 'Clear'
    },
    alwaysShowCalendars: false,
    singleDatePicker: false,
    maxDate: (new Date()),
    minDate: (new Date('04/01/2018')),
    showDropdowns: true,
    opens: 'right',
    buttonClasses: 'none',
    autoApply: false,
    timePickerSeconds: false,
    maxSpan: {
      "days": 7
    },
    drops: 'down',
    ranges: {
      'Today': [moment(), moment()],
      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    }
  };

  public selectedDate(value: any, datepicker?: any) {
    // this is the date the iser selected
    console.warn(moment(value.start).format('DD/MM/YYYY')  + '----' +moment(value.end).format('DD/MM/YYYY'));

    // any object can be passed to the selected event and it will be passed back here
    datepicker.start = value.start;
    datepicker.end = value.end;

    // or manupulat your own internal property
    this.daterange.start = value.start;
    this.daterange.end = value.end;
    this.daterange.label = value.label;
  }
}
