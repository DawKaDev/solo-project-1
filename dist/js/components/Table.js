import {templates} from '../settings.js';
import {utils} from '../utils.js';
import Modal from './Modal.js';
class Table {
  constructor(element, data, options, parent) {
    const thisTable = this;
    thisTable.parent = parent;
    thisTable.dom = {};
    thisTable.dom.wrapper = element;
    thisTable.data = {};
    thisTable.data.items = data;
    thisTable.data.options = options;
    thisTable.data.element = element;
    thisTable.render();
    thisTable.getElements();
  }

  render(){
    const thisTable = this;
    const generatedHTML = templates.tableItems(thisTable.data);
    this.element = utils.createDOMFromHTML(generatedHTML);
    thisTable.dom.wrapper.appendChild(this.element);
  }

  getElements(){
    const thisTable = this;
    const buttons = thisTable.dom.wrapper.querySelectorAll('button');
    buttons.forEach((button) => {
      thisTable.button = new Modal(button, thisTable.parent);
    } );
  }
}
export default Table;