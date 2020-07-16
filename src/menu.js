'use-strict';
import menuListImport from './menu.json';
import template from './menuItem.hbs';

// ================ Main Params =====================

const menuList = menuListImport || [];
const menuListELem = document.querySelector('.js-menu');

// ================ Renders =========================

const onLoad = () => {
  let listItemHTML = menuList
    .map(item => {
      return template(item);
    })
    .join('');
  menuListELem.insertAdjacentHTML('beforeend', listItemHTML);
};

// ================= Start ===========================

onLoad();
