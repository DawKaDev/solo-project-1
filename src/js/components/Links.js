import {settings} from '../settings.js';
//import {utils} from '../utils.js';
//import BaseContainer from './BaseContainer.js';
import Table from './Table.js';
class Links {
  constructor() {
    const thisLinks = this;
    //thisBaseContainer.renderElements();
    thisLinks.getElements();
    thisLinks.getData();
    //thisLinks.renderElements();
  }

  getElements() {
    const thisLinks = this;
    thisLinks.dom = {};
    thisLinks.dom.wrapper = document.querySelector('.section--' + thisLinks.constructor.name.toLowerCase());
    thisLinks.dom.table = thisLinks.dom.wrapper.querySelector('.container--table');
    console.log(thisLinks);
  }

  renderElements() {
    const thisLinks = this;
    //console.log('getdata1515151',thisLinks.data);
    //thisLinks.data = thisLinks.getData();
    //console.log('getdata1515151',thisLinks.data);
    /*const data = [
      {
        name: 'adam',
        surname: 'badab',
      },
    ];*/
    const options = {
      addButton: true,
      sorting: false,
      controls: true,
      hidden: [],
    };
    thisLinks.table = new Table(thisLinks.dom.table, thisLinks.data, options, thisLinks.constructor.name.toLowerCase());
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
        //console.log('parsed',parsedResponse);    
        thisLinks.renderElements();
        //return parsedResponse; 
      });
  }
}

export default Links;