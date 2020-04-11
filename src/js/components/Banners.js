import {settings} from '../settings.js';
//import {utils} from '../utils.js';
//import BaseContainer from './BaseContainer.js';
import Table from './Table.js';
class Banners {
  constructor() {
    const thisLinks = this;
    thisLinks.getElements();
    thisLinks.getData();
  }

  getElements() {
    const thisLinks = this;
    thisLinks.dom = {};
    thisLinks.dom.wrapper = document.querySelector('.section--' + thisLinks.constructor.name.toLowerCase());
    thisLinks.dom.table = thisLinks.dom.wrapper.querySelector('.container--table');
  }

  renderElements() {
    const thisLinks = this;
    const options = {
      addButton: true,
      sorting: false,
      controls: true,
      hidden: [],
    };
    thisLinks.table = new Table(thisLinks.dom.table, thisLinks.data, options);
  }

  getData() {
    const thisLinks = this;
    const url = settings.db.url + settings.db.banners;
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

export default Banners;