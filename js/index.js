const accordeon = document.getElementById('contentAccordeon');
accordeon.addEventListener('click', e => {
	if (e.target.classList.contains('accordeon')) {
    const accordeonAll = accordeon.querySelectorAll('.accordeon');
      accordeonAll.forEach(item=>{
        if(item.firstElementChild.classList.contains('accordeon__title--show') && item.lastElementChild.classList.contains('accordeon__cotentText--show')){
          item.firstElementChild.classList.remove('accordeon__title--show')
          item.lastElementChild.classList.remove('accordeon__cotentText--show')
        }
      })  
      e.target.firstElementChild.classList.toggle('accordeon__title--show');
      e.target.lastElementChild.classList.toggle('accordeon__cotentText--show');
    }
	e.stopPropagation();
});
