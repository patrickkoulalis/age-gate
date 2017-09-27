const ageGate = document.querySelector('#age_gate');
const leave = document.querySelector('button.leave');
const accept = document.querySelector('button.accept');

if(!sessionStorage.getItem("age_gate_cleared")) {
	ageGate.classList.add('age_gate_block');
}

accept.addEventListener('click', function(){
	sessionStorage.setItem('age_gate_cleared', 'true');
	ageGate.classList.add('age_gate_cleared');
	setTimeout(removeBlock, 8000);
});

leave.addEventListener('click', function(){
	redirectHome();
});

function redirectHome() {
   window.location="/";
}

function removeBlock() {
	ageGate.classList.remove('age_gate_block')
}