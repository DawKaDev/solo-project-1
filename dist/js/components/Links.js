import {select, settings} from '../settings.js';
import Table from './Table.js';
class Links {
  constructor() {
    const thisLinks = this;
    thisLinks.name = thisLinks.constructor.name.toLowerCase();
    thisLinks.getElements();
    thisLinks.getData();
  }

  getElements() {
    const thisLinks = this;
    thisLinks.dom = {};
    thisLinks.dom.wrapper = document.querySelector(select.containerOf.section + '--' + thisLinks.name);
    thisLinks.dom.table = thisLinks.dom.wrapper.querySelector(select.containerOf.table);
  }

  renderElements() {
    const thisLinks = this;
    const options = {
      addButton: true,
      sorting: false,
      controls: true,
      hidden: [],
    };
    thisLinks.table = new Table(thisLinks.dom.table, thisLinks.data, options, thisLinks.name);
  }

  getData() {
    const thisLinks = this;
    const url = settings.db.url + settings.db.links;
    thisLinks.data = {};

    fetch(url)
      .then(function(rawResponse){
        return rawResponse.json();
      }).then(function(parsedResponse){
        thisLinks.data = parsedResponse;   
        thisLinks.renderElements();
      });
  }
}

export default Links;