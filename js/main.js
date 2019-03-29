const divEmptyBasket = document.getElementById('emptyBasket')
const divFullBasket = document.getElementById('fullBasket')

const buttonPlus = document.getElementById('plus')
const buttonMinus = document.getElementById('minus')
const divNumber = document.getElementById('number')
const divAddButton = document.getElementById('addButton')

divFullBasket.style.display = 'none'



let currentNumber = parseInt(divNumber.innerText);
let currentInBasket = 0;

buttonMinus.onclick = function() {
	if(currentNumber > 1) {
	currentNumber -= 1;
}
	divNumber.innerText = currentNumber;
}

buttonPlus.onclick = function() {
	currentNumber += 1;
	divNumber.innerText = currentNumber;
}

divAddButton.onclick = () => {
	currentInBasket += currentNumber;

	if (currentInBasket) {
		divFullBasket.style.display = 'block';
		divEmptyBasket.style.display = 'none';

	}
}