import {settings} from '../settings.js';
//import {utils} from '../utils.js';
import DatePicker from './DatePicker.js';
import Table from './Table.js';
class Payout {
  constructor() {
    const thisSection = this;
    thisSection.getElements();
    thisSection.getData();
  }

  getElements() {
    const thisSection = this;
    thisSection.dom = {};
    thisSection.dom.wrapper = document.querySelector('.section--' + thisSection.constructor.name.toLowerCase());
    thisSection.dom.datepicker = thisSection.dom.wrapper.querySelector('.datepicker');
    thisSection.dom.dateFrom = thisSection.dom.datepicker.querySelector('.date-from');
    thisSection.dom.dateTo = thisSection.dom.datepicker.querySelector('.date-to');
    thisSection.dom.button = thisSection.dom.wrapper.querySelector('.btn');
    thisSection.dom.table = thisSection.dom.wrapper.querySelector('.container--table');
  }

  renderElements() {
    const thisSection = this;
    const options = {
      addButton: false,
      sorting: true,
      controls: false,
      labels: settings.tables.payout,
      hidden: ['trackerName', 'visits', 'unique', 'signups', 'ftd', 'depositors', 'payout', 'turnover'],
      pagination: 10,
    };
    thisSection.dateFrom = new DatePicker(thisSection.dom.dateFrom);
    thisSection.dateTo = new DatePicker(thisSection.dom.dateTo);
    thisSection.table = new Table(thisSection.dom.table, thisSection.data, options);
  }

  getData() {
    const thisLinks = this;
    const url = settings.db.url + settings.db.details;
    thisLinks.data = {};

    fetch(url)
      .then(function(rawResponse){
        return rawResponse.json();
      }).then(function(parsedResponse){
        thisLinks.data = parsedResponse;   
        //console.log('parsed',parsedResponse);    
        thisLinks.renderElements();
        //return parsedResponse; 
      });
  }
}

export default Payout;