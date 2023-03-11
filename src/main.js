import './js/skill-card.js';
import './js/project-card.js';



const upBtn = document.getElementById('upBtn');

upBtn.addEventListener('click', () =>  window.scrollTo(0, 0));

window.onscroll = () => {

 	window.scrollY > 1300
 		? upBtn.classList.add('upButton-on')
 		: upBtn.classList.remove('upButton-on');
}