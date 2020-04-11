import {templates} from '../settings.js';
import {utils} from '../utils.js';
class Modal {
  constructor(element, parent) {
    const thisModal = this;
    thisModal.dom = {};
    thisModal.dom.wrapper = element;
    thisModal.getElements();
    thisModal.render(parent);
  }

  getElements() {
    const thisModal = this;
    thisModal.dom.overlay = document.querySelector('.overlay');
    thisModal.dom.modal = thisModal.dom.overlay.querySelector('.modal');
  }

  render(parent) {
    const thisModal = this;
    const button = thisModal.dom.wrapper;
    button.addEventListener('click', function(event){
      event.preventDefault();
      const generatedHTML = templates.form[parent]();
      this.element = utils.createDOMFromHTML(generatedHTML);
      thisModal.dom.modal.innerHTML = '';
      thisModal.dom.modal.appendChild(this.element);
      thisModal.dom.overlay.classList.add('show');
      thisModal.dom.modal.classList.add('show');
      thisModal.initActions();
    });
  }

  initActions() {
    const thisModal = this;
    thisModal.dom.close = thisModal.dom.modal.querySelector('.icon-close');
    thisModal.dom.close.addEventListener('click', function(){
      thisModal.dom.overlay.classList.remove('show');
    });
    thisModal.dom.overlay.addEventListener('click', function(e) {
      if(e.target === this) {
        thisModal.dom.overlay.classList.remove('show');
      }
    });
  }
}

export default Modal;