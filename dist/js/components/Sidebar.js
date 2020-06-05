import {utils} from '../utils.js';
import {select, templates} from '../settings.js';
class Sidebar {
  constructor(data) {
    const thisSidebar = this;
    thisSidebar.data = {};
    thisSidebar.data.menu = data;
    thisSidebar.render();
    thisSidebar.getElements();
    thisSidebar.initActions();
  }

  render() {
    const thisSidebar = this;
    const generatedHTML = templates.sidebar(thisSidebar.data);
    this.element = utils.createDOMFromHTML(generatedHTML);
    const sidebarContainer = document.querySelector(select.containerOf.sidebar);
    sidebarContainer.appendChild(this.element);
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