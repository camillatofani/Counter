let count = 0;
let value = document.querySelector('#value');
let btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
	btn.addEventListener('click', function(e){
		const styles = e.currentTarget.classList;
		if (styles.contains('decrease')) {
			count--;
		} else if (styles.contains('increase')) {
			count++;
		} else {
			count = 0;
		}
		if (count < 0) {
			value.style.color = '#c70000';
		} else if (count > 0) {
			value.style.color = '#009f28';
		} else {
			value.style.color = '#000000';
		}
		value.textContent = count;
	});
});
