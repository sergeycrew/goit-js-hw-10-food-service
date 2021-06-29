import dishesTemplates from './partials/example.hbs';
import dishes from './menu.json';
import './sass/main.scss';


const refs = {
    menu: document.querySelector(".js-menu"),
    themeSwitch: document.querySelector(".theme-switch__toggle"),
    body: document.querySelector("body"),
  };
  
  const markup = dishesTemplates(dishes);
  refs.menu.insertAdjacentHTML('beforeend', markup);

  const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };


const theme = localStorage.getItem("theme");

refs.body.classList.add(!theme ? Theme.LIGHT : theme);

refs.themeSwitch.checked = theme === "dark-theme" ? true : false;



refs.themeSwitch.addEventListener("change", switchHendler);

function switchHendler() {
  refs.body.classList.toggle(Theme.DARK);
  refs.body.classList.toggle(Theme.LIGHT);
  localStorage.setItem("theme", refs.body.className);
}
console.dir(refs.body)