
window.addEventListener("load",()=>{

if(window.location.search==("")){comienzo();}

if(window.location.search==('?bloque=titulos')){titulos();}

if(window.location.search==('?bloque=generos')){generos();}

if(window.location.search==('?bloque=editoriales')){editoriales();}

if(window.location.search==('?bloque=autores')){autores();}

for(var j=0;j<12;j++){if(window.location.search==('?bloque='+j)){
	titulosb();}}
for(var h=1;h<12;h++){if(window.location.search==('?id_autor='+h)){
	titulosc();}}
console.log(window.location.search);
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
	inicio[i].id_titulo+'">'+' - '+inicio[i].titulo+'  -  (Idioma: '+
									inicio[i].subtitulo+')'+'</div></a>';
}
}
function generos(){
document.querySelector("body").innerHTML+='<div class="modal">';
	for(var i=0;i<inicio.length;i++){
		document.querySelector(".modal").innerHTML+=
	'<a href="?bloque='+inicio[i].genero+'"><div class="unidad">'+' - '+inicio[i].genero+'</div></a>';
}
}
function editoriales(){
document.querySelector("body").innerHTML+='<div class="modal">';
	for(var i=0;i<inicio.length;i++){
		document.querySelector(".modal").innerHTML+=
	'<a href="?bloque='+inicio[i].editorial+'"><div class="unidad">'+' - '+inicio[i].editorial+'</div></a>';
}

}
function autores(){
document.querySelector("body").innerHTML+='<div class="modal">';
	for(var i=0;i<inicio.length;i++){
		document.querySelector(".modal").innerHTML+=
	'<a href="?id_autor='+inicio[i].id_autor+'"><div class="unidad">'+' - '+inicio[i].autor+'</div></a>';
}	
}
function titulosb(){
document.querySelector("body").innerHTML+='<div class="modal">';
	
		document.querySelector(".modal").innerHTML+=
	'<a href="?id_autor='+iniciob[0].id_autor+'"><div class="unidad">'+' - '+iniciob[0].autor+' - '+
								iniciob[0].nacionalidad+' - '+
								iniciob[0].nacimiento+' - '+
								iniciob[0].fallece+'</div></a>';
}		
function titulosc(){
	document.querySelector("body").innerHTML+='<div class="modal">';
	document.querySelector(".modal").innerHTML+=
	'<div class="unidad">Titulos de este autor en la biblioteca:</div>'+
	'<a href="?bloque='+inicioc[0].id_titulo+'"><div class="unidad">-'+inicioc[0].titulo+'</div></a>';
}