/** @format */
const accordeon = document.getElementById('contentAccordeon');
accordeon.addEventListener('click', e => {
	if (e.target.classList.contains('accordeon')) {
		e.target.firstElementChild.classList.toggle('accordeon__title--show');
		e.target.lastElementChild.classList.toggle('accordeon__cotentText--show');
  }
	e.stopPropagation();
});
