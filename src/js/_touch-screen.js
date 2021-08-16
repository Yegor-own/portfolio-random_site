

document.addEventListener("click", documentActions);
let detect = new MobileDetect(window.navigator.userAgent)
// Actions
function documentActions(e) {
  const targetElement = e.target;
  if (window.innerWidth > 768 && detect.mobile() != null) {
    if (targetElement.classList.contains('menu__arrow')) {
      targetElement.closest('.menu__item').classList.toggle('_hover')
    }
  }
  if (targetElement.classList.contains('search-form__icon')) {
    document.querySelector('.search-form').classList.toggle('_active')
  } else if(!targetElement.closest('.search-form') && document.querySelector('._active')) {
    document.querySelector('.search-form').classList.remove('_active')
  }
}