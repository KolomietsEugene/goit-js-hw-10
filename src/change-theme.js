'usse-strict';

// ================ Main Params =====================

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyElem = document.querySelector('body');
const changeThemeBtn = document.querySelector('input.js-switch-input');

// ================= Handlers =======================

const handlerOnChangeTheme = e => {
  if (e.target.checked) {
    renderTheme(Theme.LIGHT, Theme.DARK);
    saveTheme(Theme.DARK, e.target.checked);
  } else {
    renderTheme(Theme.DARK, Theme.LIGHT);
    saveTheme(Theme.LIGHT, e.target.checked);
  }
};

// ==================== Renders ======================

const renderTheme = function (oldTheme, newTheme) {
  bodyElem.classList.replace(oldTheme, newTheme);
};

const onLoadTheme = () => {
  const themeStatus = loadTheme();
  bodyElem.classList.add(themeStatus.theme || Theme.LIGHT);
  changeThemeBtn.checked = themeStatus.isChecked;
};

// ===================== Save/Load ===================

const saveTheme = function (newTheme, checkboxStatus) {
  localStorage.setItem(
    'mainTheme',
    JSON.stringify({ theme: newTheme, isChecked: checkboxStatus }),
  );
};

const loadTheme = () => {
  return JSON.parse(localStorage.getItem('mainTheme')) || {};
};

// ===================== Events ======================

changeThemeBtn.addEventListener('change', handlerOnChangeTheme);

// ===================== Start =======================

onLoadTheme();
