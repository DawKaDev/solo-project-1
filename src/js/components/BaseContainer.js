import {select, templates} from '../settings.js';
import {utils} from '../utils.js';
class BaseContainer {
  constructor(data) {
    const thisBaseContainer = this;
    thisBaseContainer.elements = data;
    thisBaseContainer.render();
  }

  render() {
    const thisBaseContainer = this;
    const baseContainer = document.querySelector(select.containerOf.main);
    let title = '';
    thisBaseContainer.elements.forEach( object => {
      object.heading ? title = object.heading : title = object.title;
      const generatedHTML = templates.main({title: title, link: object.link});
      const mainContainer = utils.createDOMFromHTML(generatedHTML);
      const container = mainContainer.querySelector(select.containerOf.content);
      if(object.sections && object.sections.length > 0)
      {
        object.sections.forEach( (section) => {
          let generatedHTML1 = templates[section]({title: section,  data: object.data,});
          this.element = utils.createDOMFromHTML(generatedHTML1);
          container.appendChild(this.element);
          console.log('sekcja',section);
        });
      }
      baseContainer.appendChild(mainContainer);
    });
  }

  getElement() {
    const thisBaseContainer = this;
    thisBaseContainer.dom = {};
    thisBaseContainer.dom.container = document.querySelector(select.containerOf.section + '--' + thisBaseContainer.data.module);
    thisBaseContainer.dom.wrapper = thisBaseContainer.dom.container.querySelector(select.containerOf.content);
    //console.log(thisBaseContainer.dom);
  }
}
export default BaseContainer;