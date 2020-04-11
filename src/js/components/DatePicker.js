/* global flatpickr */
import {utils} from '../utils.js';
class DatePicker {
  constructor(element) {
    const thisWidget = this;
    thisWidget.dom = {};
    thisWidget.dom.wrapper = element;
    thisWidget.dom.input = thisWidget.dom.wrapper.querySelector('input[type="text"]');
    thisWidget.value = utils.dateToStr(new Date());
    thisWidget.render();
  }

  get value(){
    const thisWidget = this;
    return thisWidget.correctValue;
  }
  set value(value){
    const thisWidget = this;
    const newValue = thisWidget.parseValue(value);
    if(newValue!=thisWidget.correctValue && thisWidget.isValid(newValue)){
      thisWidget.correctValue = newValue;
      thisWidget.announce();
    }
    thisWidget.renderValue();
    //console.log('setter',value);
  }
  setValue(value) {
    const thisWidget = this;

    thisWidget.value = value;
  }
  parseValue(value){
    return (value);
  }
  isValid(value){
    return (value);
  }
  renderValue(){
    const thisWidget = this;
    thisWidget.dom.input.value = thisWidget.value;
    //console.log('render',thisWidget.value);
  }
  announce(){
    const thisWidget = this;
    const event = new CustomEvent('updated', {
      bubbles: true
    });
    thisWidget.dom.wrapper.dispatchEvent(event);
  }
  render() {
    const thisWidget = this;
    flatpickr(thisWidget.dom.wrapper, {
      defaultDate: utils.dateToStr(new Date()),
      dateFormat: 'Y-m-d',
      locale: {
        firstDayOfWeek: 1,
      },
      onChange: function(datesArr, dateStr){
        thisWidget.value = dateStr;
      }
    });
  }
  addActions() {
    const thisWidget = this;
    thisWidget.dom.button.addEventListener('click', function(){
      event.preventDefault();
      //console.log('test');
    });
  }

}
export default  DatePicker;