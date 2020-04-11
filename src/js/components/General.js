/* global Chart */
import DatePicker from './DatePicker.js';
class General {
  constructor() {
    //super(data);
    const thisSection = this;
    thisSection.getElements();
    thisSection.initWidgets();
    thisSection.initActions();
  } 

  getElements() {
    const thisSection = this;
    thisSection.dom = {};
    thisSection.dom.wrapper = document.querySelector('.section--' + thisSection.constructor.name.toLowerCase());
    thisSection.dom.datepicker = thisSection.dom.wrapper.querySelector('.datepicker');
    thisSection.dom.dateFrom = thisSection.dom.datepicker.querySelector('.date-from');
    thisSection.dom.dateTo = thisSection.dom.datepicker.querySelector('.date-to');
    thisSection.dom.button = thisSection.dom.wrapper.querySelector('.btn');
    thisSection.dom.chart = thisSection.dom.wrapper.querySelector('.canvas');
  }
  
  initWidgets() {
    const thisSection = this;
    thisSection.dateFrom = new DatePicker(thisSection.dom.dateFrom);
    thisSection.dateTo = new DatePicker(thisSection.dom.dateTo);
    thisSection.chart = new Chart(thisSection.dom.chart, {
      // 1
      type: 'bar',
      responsive: false,
      data: {
        // 2
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        // 3
        datasets: [{
          // 4
          label: 'Signups',
          // 5
          backgroundColor: '#8DBEC8',
          borderColor: '#8DBEC8',
          // 6
          data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
        },
        {
          label: 'FTD',
          backgroundColor: '#F29E4E',
          borderColor: '#F29E4E',
          data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
        },
        {
          label: 'Earned',
          backgroundColor: '#71B374',
          borderColor: '#71B374',
          data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
          // 7
          hidden: true,
        }]
      },
    });
  }

  initActions() {
    const thisSection = this;
    thisSection.dom.button.addEventListener('click', function(){
      event.preventDefault();
      console.log('Update chart');
    });
  }
}

export default General;