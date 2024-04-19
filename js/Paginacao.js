document.getElementById('btncadastro').addEventListener('click', () => {
	document.getElementById('cadastro').classList.add('animacao');
	document.getElementById('container').style.filter = 'blur(0px)';
})
document.getElementById('btn-avancar1').addEventListener('click', () => {
	document.getElementById('pag1').classList.toggle("display-none");
	document.getElementById('pag2').classList.toggle("display-none");
})
document.getElementById('btn-voltar2').addEventListener('click', () => {
	document.getElementById('pag1').classList.toggle("display-none");
	document.getElementById('pag2').classList.toggle("display-none");
})
document.getElementById('btn-avancar2').addEventListener('click', () => {
	document.getElementById('pag2').classList.toggle("display-none");
	document.getElementById('pag3').classList.toggle("display-none");
})
document.getElementById('btn-voltar3').addEventListener('click', () => {
	document.getElementById('pag2').classList.toggle("display-none");
	document.getElementById('pag3').classList.toggle("display-none");
})
document.getElementById('btn-avancar3').addEventListener('click', () => {
	document.getElementById('pag3').classList.toggle("display-none");
	document.getElementById('pag4').classList.toggle("display-none");
	document.getElementById('footer').classList.toggle("display-none");
	document.querySelector('body').style.backgroundColor = "white";
})