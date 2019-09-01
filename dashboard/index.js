const menuIconEl = document.querySelector('.menu-icon');
const sidenavEl = document.querySelector('.sidenav');
const sidenavCloseEl = document.querySelector('.sidenav__close-icon');

const toggleClassName = (el, className) => {
    if (el.classList.contains(className)) {
      el.classList.remove(className);
    } else {
      el.classList.add(className);
    }
  }

menuIconEl.addEventListener('click', () => toggleClassName(sidenavEl, 'active'));
sidenavCloseEl.addEventListener('click', () => toggleClassName(sidenavEl, 'active'));