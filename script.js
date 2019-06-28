//Declarations
const firstCard = document.querySelector('#firstCard');
const secondCard = document.querySelector('#secondCard');
const thirdCard = document.querySelector('#thirdCard');

const divGo = document.querySelector('.divGo');
const divGo1 = document.querySelector('.divGo1');
const divGo2 = document.querySelector('.divGo2');
const divGo3 = document.querySelector('.divGo3');
const divGo4 = document.querySelector('.divGo4');
const divGo5 = document.querySelector('.divGo5');
const divGo6 = document.querySelector('.divGo6');
const divGo7 = document.querySelector('.divGo7');
const divGo8 = document.querySelector('.divGo8');

const flex_container = document.querySelector('.flex-container');
const flex_container2 = document.querySelector('.flex-container2');
const flex_container3 = document.querySelector('.flex-container3');
const flex_container4 = document.querySelector('.flex-container4');
const btn = document.querySelector('#btn');

firstCard.addEventListener('click', openOffer);
secondCard.addEventListener('click', openOffer2);
thirdCard.addEventListener('click', openOffer3);

let clicked = false;

divGo.addEventListener('click', removeDark);

function openOffer(){
	firstCard.style.color = '#fff';
	firstCard.style.boxShadow = '0 0 20px rgb(255, 158, 0), 0 0 20px rgb(255, 158, 0),0 0 20px rgb(255, 158, 0),0 0 20px rgb(255, 158, 0),0 0 20px rgb(255, 158, 0),0 0 20px rgb(255, 158, 0),0 0 20px rgb(255, 158, 0),0 0 20px rgb(255, 158, 0)';
	setTimeout(delFC,800);
}
function openOffer2(){
	secondCard.style.color = '#fff';
	secondCard.style.boxShadow = '0 0 20px rgb(255, 158, 0), 0 0 20px rgb(255, 158, 0),0 0 20px rgb(255, 158, 0),0 0 20px rgb(255, 158, 0),0 0 20px rgb(255, 158, 0),0 0 20px rgb(255, 158, 0),0 0 20px rgb(255, 158, 0),0 0 20px rgb(255, 158, 0)';
	setTimeout(delFC2, 800);
}
function openOffer3(){
	thirdCard.style.color = '#fff';
	thirdCard.style.boxShadow = '0 0 20px rgb(255, 158, 0), 0 0 20px rgb(255, 158, 0),0 0 20px rgb(255, 158, 0),0 0 20px rgb(255, 158, 0),0 0 20px rgb(255, 158, 0),0 0 20px rgb(255, 158, 0),0 0 20px rgb(255, 158, 0),0 0 20px rgb(255, 158, 0)';
	setTimeout(delFC3, 800);
}

function delFC(){
	flex_container.remove();
	flex_container2.style.display = 'flex';
	divGo.style.boxShadow = '0 0 20px rgb(33, 150, 254), 0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254)';
	divGo1.style.boxShadow = '0 0 20px rgb(33, 150, 254), 0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254)';
	btn.style.display = 'block';

	if(clicked == false){
		console.log('false');
		delFCRemove();
	}
	else{
		console.log('true na');
	}
}
function delFC2(){
	flex_container.remove();
	flex_container3.style.display = 'flex';
	divGo2.style.boxShadow = '0 0 20px rgb(33, 150, 254), 0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254)';
	divGo3.style.boxShadow = '0 0 20px rgb(33, 150, 254), 0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254)';
	divGo4.style.boxShadow = '0 0 20px rgb(33, 150, 254), 0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254)';
	btn.style.display = 'block';
}
function delFC3(){
	flex_container.remove();
	flex_container4.style.display = 'flex';
	divGo5.style.boxShadow = '0 0 20px rgb(33, 150, 254), 0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254)';
	divGo6.style.boxShadow = '0 0 20px rgb(33, 150, 254), 0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254)';
	divGo7.style.boxShadow = '0 0 20px rgb(33, 150, 254), 0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254)';
	divGo8.style.boxShadow = '0 0 20px rgb(33, 150, 254), 0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254),0 0 20px rgb(33, 150, 254)';
	btn.style.display = 'block';
}
function removeDark(){
	console.log('gumagana');
	return clicked = true;
}
function delFCRemove(){
	//clicked == false;
	divGo.style.background = 'black';
	divGo.style.opacity = '0.5';
	divGo.innerHTML =  '';

	divGo1.style.background = 'black';
	divGo1.style.opacity = '0.5';
	divGo1.innerHTML =  '';
}


