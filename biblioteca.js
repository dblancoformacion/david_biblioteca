
window.addEventListener("load",()=>{

if(window.location.search==("")){comienzo();}

if(window.location.search==('?bloque=titulos')){titulos();}

if(window.location.search==('?bloque=generos')){generos();}

if(window.location.search==('?bloque=editoriales')){editoriales();}

if(window.location.search==('?bloque=autores')){autores();}

for(var j=0;j<inicio.length;j++){if(window.location.search==('?bloque='+j)){
	titulosb();
}}
console.log(window.location.search);console.log(inicio.length)





	

})
function comienzo(){
document.querySelector("body").innerHTML+='<div class="modal">';
	for(var i=0;i<inicio.length;i++){
		document.querySelector(".modal").innerHTML+=
	'<a href="?bloque='+inicio[i].titulo+'"><div class="unidad">'+' - '+inicio[i].titulo+'</div></a>';

}

}
function titulos(){
document.querySelector("body").innerHTML+='<div class="modal">';
	for(var i=0;i<inicio.length;i++){
		document.querySelector(".modal").innerHTML+=
	'<a href="?bloque='+inicio[i].id_titulo+'"><div class="unidad" id="'+
	inicio[i].id_titulo+'">'+' - '+inicio[i].titulo+'</div></a>';
	
}

}
function generos(){
document.querySelector(".wrapper").innerHTML+='<div class="modal">';
	for(var i=0;i<inicio.length;i++){
		document.querySelector(".modal").innerHTML+=
	'<a href="?bloque='+inicio[i].genero+'"><div class="unidad">'+' - '+inicio[i].genero+'</div></a>';
}

}
function editoriales(){
document.querySelector(".wrapper").innerHTML+='<div class="modal">';
	for(var i=0;i<inicio.length;i++){
		document.querySelector(".modal").innerHTML+=
	'<a href="?bloque='+inicio[i].editorial+'"><div class="unidad">'+' - '+inicio[i].editorial+'</div></a>';
}

}
function autores(){
document.querySelector(".wrapper").innerHTML+='<div class="modal">';
	for(var i=0;i<inicio.length;i++){
		document.querySelector(".modal").innerHTML+=
	'<a href="?bloque='+inicio[i].autor+'"><div class="unidad">'+' - '+inicio[i].autor+'</div></a>';
}	
}
function titulosb(){
document.querySelector("body").innerHTML+='<div class="modal">';
	
		document.querySelector(".modal").innerHTML+=
	'<div class="unidad">'+' - '+iniciob[0].autor+'</div';
}		
