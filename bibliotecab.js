items=['Titulos','Autores','Editoriales','Generos'];

var x=[];
var y=[];
var objetob;var posicionb;var posicion;
window.addEventListener("load",()=>{


entrada();

if(window.location.search==('?bloque=Titulos')){Titulos(datos1,datos5);}else{
	if(window.location.search==('?bloque=Autores')){
		Autores(datos2);
	}else{if(window.location.search==('?bloque=Editoriales')){Editoriales(datos3);}else{
		if(window.location.search==('?bloque=Generos')){Generos(datos4);}
		}
	}}


})

function entrada(){
	document.querySelector(".wrapper").innerHTML+='<div class="wrapperb"></div>';
	for (var i=0;i<items.length;i++){
		document.querySelector(".wrapperb").innerHTML+=
		'<a href="?bloque='+items[i]+'"><div class="items">'+items[i]+'</div></a>';
	}
	

}

function Titulos(datos1,datos5){
	
	document.querySelector(".wrapper").innerHTML+='<div class="modal"></div>';

	for (var i=0;i<datos1.length;i++){
		document.querySelector(".modal").innerHTML+=
	'<div class="unidad" id="'+datos1[i].id_titulo+'">'
	+datos1[i].titulo+'</div>';
	}
		x=document.querySelectorAll(".unidad");
		x.forEach((v,i)=>{x[i].addEventListener("click",(event)=>{
		objetob=event.target;posicionb=objetob.getAttribute("id");posicion=posicionb-1;
		document.querySelector(".wrapper").innerHTML+='<div class="modalb"></div>';
		titulitos(datos5,posicion)})})
}
	
function Autores(datos2){
	document.querySelector(".wrapper").innerHTML+='<div class="modal"></div>';

	for (var i=0;i<datos2.length;i++){
		document.querySelector(".modal").innerHTML+=
		'<div class="unidad" id="'+datos2[i].id_autor+'">'+
		datos2[i].autor+'</div>';
	}
		x=document.querySelectorAll(".unidad");
		x.forEach((v,i)=>{x[i].addEventListener("click",(event)=>{
		objetob=event.target;posicionb=objetob.getAttribute("id");posicion=posicionb-1;
		document.querySelector(".wrapper").innerHTML+='<div class="modalb"></div>';
		autoritos(datos2,posicion)})})
}

function Editoriales(datos3){
	document.querySelector(".wrapper").innerHTML+='<div class="modal"></div>';
	for (var i=0;i<datos3.length;i++){
		document.querySelector(".modal").innerHTML+=
		'<div class="unidad">'+datos3[i].editorial+'</div>';
	}
		x=document.querySelectorAll(".unidad");
		x.forEach((v,i)=>{x[i].addEventListener("click",(event)=>{
		objetob=event.target;posicionb=objetob.getAttribute("id");posicion=posicionb-1;
		document.querySelector(".wrapper").innerHTML+='<div class="modalb"></div>';editorialitas(datos6,posicion);
		})})
}

function Generos(datos4){
	document.querySelector(".wrapper").innerHTML+='<div class="modal"></div>';
	for (var i=0;i<datos4.length;i++){
		document.querySelector(".modal").innerHTML+=
		'<a href=""><div class="unidad">'+datos4[i].genero+'</div></a>';
	}
}
	
function titulitos(datos5,posicion){

	document.querySelector(".modalb").innerHTML+=
	'<div class="unidadb">'+datos5[posicion].autor+
						   datos5[posicion].nacionalidad+
						   datos5[posicion].nacimiento+
						   datos5[posicion].fallece+'</div>';	
	

}
function autoritos(datos2,posicion){

	document.querySelector(".modalb").innerHTML+=
	'<div class="unidadb">'+datos2[posicion].autor+
						   datos2[posicion].nacionalidad+
						   datos2[posicion].nacimiento+
						   datos2[posicion].fallece+'</div>';	
	
}
function editorialitas(datos6,posicion){
	document.querySelector(".modalb").innerHTML+=
	'<div class="unidadb">'+datos6[posicion].titulo+
						   datos6[posicion].edicion+
						   datos6[posicion].annio+
						   datos6[posicion].bilingue+'</div>';	
}