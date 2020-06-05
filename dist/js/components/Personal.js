import {select, settings, templates} from '../settings.js';
import {utils} from '../utils.js';
class Personal {
  constructor() {
    const thisSection = this;
    thisSection.name = thisSection.constructor.name.toLowerCase();
    thisSection.getElements();
    thisSection.getData();
  }

  getElements() {
    const thisSection = this;
    thisSection.dom = {};
    thisSection.dom.wrapper = document.querySelector(select.containerOf.section + '--' + thisSection.name);
    thisSection.dom.container = thisSection.dom.wrapper.querySelector(select.containerOf.content);
  }

  renderElements() {
    const thisSection = this;
    const generatedHTML = templates.personal(thisSection.data[0]);
    const mainContainer = utils.createDOMFromHTML(generatedHTML);
    thisSection.dom.container.appendChild(mainContainer);
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
        thisSection.renderElements();
      });
  }
}

export default Personal;