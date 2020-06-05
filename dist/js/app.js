import {select, settings, classNames} from './settings.js';
import Sidebar from './components/Sidebar.js';
import General from './components/General.js';
import Links from './components/Links.js';
import Details from './components/Details.js';
import Banners from './components/Banners.js';
import BaseContainer from './components/BaseContainer.js';
import Personal from './components/Personal.js';
import Payout from './components/Payout.js';
const app = {
  initPages: function(){
    const thisApp = this;
    thisApp.pages = Array.from(document.querySelector(select.containerOf.main).children);
    thisApp.navLinks = document.querySelectorAll(select.nav.links);
    const idFromHash = window.location.hash.replace('#/', '');
    let pageMatchingHash = thisApp.navLinks[0].getAttribute('href').replace('#','');
    for(let page of thisApp.pages){
      if(page.classList.contains('section--'+idFromHash.replace('#',''))){
        pageMatchingHash = idFromHash.replace('#','');
        break;
      }
    }
    thisApp.activatePage(pageMatchingHash);
    
    for(let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        const clickedElement = this;
        const id = clickedElement.getAttribute('href').replace('#','');
        event.preventDefault();
        thisApp.activatePage(id);
        window.location.hash = '#/' + id;
      });
    }
  },
  activatePage(id) {
    const thisApp = this;
    thisApp.pages.forEach( page => {
      page.classList.remove('active');
    });
    thisApp.navLinks.forEach( link => {
      link.classList.remove(classNames.nav.linkActive);
      if(link.getAttribute('href') == '#' + id)
        link.classList.add(classNames.nav.linkActive);
    });
    
    thisApp.nav = document.querySelector(select.containerOf.nav);
    const activeLink = thisApp.nav.querySelector('a.active');
    const sectionModules = activeLink.getAttribute('data-modules');
    if(sectionModules != '') {
      const modules = sectionModules.split(',');
      modules.forEach(module => {
        const activeModule = document.querySelector('.section--'+module);
        activeModule.classList.add('active');
      });
    }
    const activePage = document.querySelector('.section--' + id);
    activePage.classList.add('active');
  },
  getData() {
    const thisApp = this;
    thisApp.data = {};
    const url = settings.db.url + settings.db.menu;
    fetch(url)
      .then(function(rawResponse){
        return rawResponse.json();
      })
      .then(function(parsedResponse){
        thisApp.data = parsedResponse;
        new BaseContainer(thisApp.data);
        new Sidebar(thisApp.data);
        new General();
        new Details();
        new Links();
        new Banners();
        new Personal();
        new Payout();
        thisApp.initPages();
      });
  },
  init() {
    const thisApp = this;
    thisApp.getData();
  }
};
app.init();