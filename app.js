let count = 0;
let value = document.querySelector('#value');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');

decrease.addEventListener('click', function(){
	count -= 1;
	value.innerHTML = count;
});
reset.addEventListener('click', function () {
	count = 0;
	value.innerHTML = count;
});
increase.addEventListener('click', function () {
	count += 1;
	value.innerHTML = count;
});
