import {utils} from '../utils.js';
import {select, templates, settings} from '../settings.js';
class Sidebar {
  constructor(data) {
    const thisSidebar = this;
    thisSidebar.data = {};
    thisSidebar.data.menu = data;
    //console.log('sidebar data from index',data,thisSidebar.data);
    thisSidebar.render();
    thisSidebar.getElements();
    thisSidebar.initActions();
  }

  render() {
    const thisSidebar = this;
    //console.log('sidebar',thisSidebar.data);
    const generatedHTML = templates.sidebar(thisSidebar.data);
    this.element = utils.createDOMFromHTML(generatedHTML);
    const sidebarContainer = document.querySelector(select.containerOf.sidebar);
    sidebarContainer.appendChild(this.element);
  }

  getData() {
    const thisSidebar = this;
    const url = settings.db.url + settings.db.menu;
    thisSidebar.data = {};
    fetch(url)
      .then(function(rawResponse){
        return rawResponse.json();
      })
      .then(function(parsedResponse){
        thisSidebar.data.menu = parsedResponse;
        thisSidebar.render();
      });
    //console.log(thisSidebar.data);
  }

  getElements() {
    const thisSidebar = this;
    thisSidebar.dom = {};
    thisSidebar.dom.wrapper = document.querySelector('.sidebar'); 
    thisSidebar.dom.mobile = thisSidebar.dom.wrapper.querySelector('.brand__mobile');
  }

  initActions() {
    const thisSidebar = this;
    thisSidebar.dom.mobile.addEventListener('click', function(){
      event.preventDefault();
      thisSidebar.dom.wrapper.classList.toggle('sidebar--small');
      console.log('click');
    });
  }
}
export default Sidebar;