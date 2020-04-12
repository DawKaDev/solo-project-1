/* global Handlebars */
export const select = {
  templateOf: {
    sidebar: '#template-sidebar-menu',
    main: '#template-main',
    chart: '#template-chart',
    table: '#template-table',
    tableItems: '#template-table-items',
    datepicker: '#template-datepicker',
    button: '#template-button',
    personal: '#template-personal-data',
    form: {
      banners: '#template-form-banners',
      links: '#template-form-links',
    }
  },
  containerOf: {
    sidebar: '.sidebar-wrapper',
    nav: '.nav',
    main: '.main__content',
    section: '.section',
    content: '.section__content',
    table: '.container--table',
  },
  nav: {
    links: '.nav__link',
    active: '.active'
  }
};
export const classNames = {
  nav: {
    linkActive: 'active'
  }
};
export const settings = {
  tables: {
    details: ['Tracker name', 'Initiated date', 'Visits', 'Unique', 'Signups', 'FTD', 'Depositors', 'Deposits ($)', 'Payout ($)', 'Turnover', 'Deal'],
    payout: ['Date', 'Amount ($)', 'Deal', 'Account'],
  },
  section: 'section',
  logo: 'src/images/logo.png',
  db: {
    url: 'http://' + window.location.hostname + (window.location.hostname == 'localhost' ? ':3131' : '') + '/',
    menu: 'menu',
    links: 'links',
    banners: 'banners',
    details: 'details',
    personal: 'users',
  }
};
export const templates = {
  sidebar: Handlebars.compile(document.querySelector(select.templateOf.sidebar).innerHTML),
  main: Handlebars.compile(document.querySelector(select.templateOf.main).innerHTML),
  chart: Handlebars.compile(document.querySelector(select.templateOf.chart).innerHTML),
  table: Handlebars.compile(document.querySelector(select.templateOf.table).innerHTML),
  tableItems: Handlebars.compile(document.querySelector(select.templateOf.tableItems).innerHTML),
  datepicker: Handlebars.compile(document.querySelector(select.templateOf.datepicker).innerHTML),
  button: Handlebars.compile(document.querySelector(select.templateOf.button).innerHTML),
  personal: Handlebars.compile(document.querySelector(select.templateOf.personal).innerHTML),
  form: {
    banners: Handlebars.compile(document.querySelector(select.templateOf.form.banners).innerHTML),
    links: Handlebars.compile(document.querySelector(select.templateOf.form.links).innerHTML)
  }
};