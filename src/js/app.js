import {select, settings, classNames} from './settings.js';
import Sidebar from './components/Sidebar.js';
import General from './components/General.js';
import Links from './components/Links.js';
import Details from './components/Details.js';
import Banners from './components/Banners.js';
import BaseContainer from './components/BaseContainer.js';
import Personal from './components/Personal.js';
import Payout from './components/Payout.js';
//import Table from './components/Table.js';
const app = {
  initPages: function(){
    const thisApp = this;
    thisApp.pages = Array.from(document.querySelector(select.containerOf.main).children);
    thisApp.navLinks = document.querySelectorAll(select.nav.links);
    const idFromHash = window.location.hash.replace('#/', '');
    
    ///console.log(thisApp.pages);
    //console.log(idFromHash);
    thisApp.activatePage(idFromHash.replace('#', ''));
    //console.log(thisApp.navLinks);
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
        //console.log('modul', module, id);
        const activeModule = document.querySelector('.section--'+module);
        activeModule.classList.add('active');
      });
    }
    //console.log(id);
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
        //console.log('app',thisApp.data);
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
  initGeneral() {
    const thisApp = this;
    new General('general', 'General statistics', thisApp.data);
  },
  initLinks() {
    new Links('links', 'Links statistics');
  },
  initDetails() {
    new Details('details', 'Details');
  },
  /*getInfo(id) {
    const thisApp = this;
    const title = thisApp.data[0].title;
    //console.log('test1', title, id);
  },*/
  init() {
    const thisApp = this;
    thisApp.getData();
    //new Sidebar;
    //setTimeout(() => thisApp.initPages(), 1500);
    //thisApp.initPages();
    //thisApp.initGeneral();
  }
};
app.init();