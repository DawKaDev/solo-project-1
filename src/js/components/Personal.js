import {settings, templates} from '../settings.js';
import {utils} from '../utils.js';
//import BaseContainer from './BaseContainer.js';
//import Table from './Table.js';
class Personal {
  constructor() {
    const thisSection = this;
    //thisBaseContainer.renderElements();
    thisSection.getElements();
    thisSection.getData();
    //thisSection.renderElements();
  }

  getElements() {
    const thisSection = this;
    thisSection.dom = {};
    thisSection.dom.wrapper = document.querySelector('.section--' + thisSection.constructor.name.toLowerCase());
    thisSection.dom.container = thisSection.dom.wrapper.querySelector('.section__content');
  }

  renderElements() {
    const thisSection = this;
    const generatedHTML = templates.personal(thisSection.data[0]);
    const mainContainer = utils.createDOMFromHTML(generatedHTML);
    thisSection.dom.container.appendChild(mainContainer);
    console.log(thisSection.data[0]);
  }

  getData() {
    const thisSection = this;
    const url = settings.db.url + settings.db.personal + '?email=leo@gmail.com';
    thisSection.data = {};

    fetch(url)
      .then(function(rawResponse){
        return rawResponse.json();
      }).then(function(parsedResponse){
        thisSection.data = parsedResponse;   
        //console.log('parsed',parsedResponse);    
        thisSection.renderElements();
        //return parsedResponse; 
      });
  }
}

export default Personal;