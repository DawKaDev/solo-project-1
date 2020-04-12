import {select, settings} from '../settings.js';
import Table from './Table.js';
class Banners {
  constructor() {
    const thisBanners = this;
    thisBanners.name = thisBanners.constructor.name.toLowerCase();
    thisBanners.getElements();
    thisBanners.getData();
  }

  getElements() {
    const thisBanners = this;
    thisBanners.dom = {};
    thisBanners.dom.wrapper = document.querySelector(select.containerOf.section + '--' + thisBanners.name);
    thisBanners.dom.table = thisBanners.dom.wrapper.querySelector(select.containerOf.table);
  }

  renderElements() {
    const thisBanners = this;
    const options = {
      addButton: true,
      sorting: false,
      controls: true,
      hidden: [],
    };
    thisBanners.table = new Table(thisBanners.dom.table, thisBanners.data, options);
  }

  getData() {
    const thisBanners = this;
    const url = settings.db.url + settings.db.banners;
    thisBanners.data = {};

    fetch(url)
      .then(function(rawResponse){
        return rawResponse.json();
      }).then(function(parsedResponse){
        thisBanners.data = parsedResponse;      
        thisBanners.renderElements();
      });
  }
}

export default Banners;