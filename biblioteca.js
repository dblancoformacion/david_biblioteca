items=['Titulos','Autores','Editoriales','Generos'];
var x=[];
var objetob;var posicionb;var posicion;
window.addEventListener("load",()=>{


entrada();

if(window.location.search==('?bloque=Titulos')){titulos(datos1);}else{
	if(window.location.search==('?bloque=Autores')){
		autores(datos2);
	}else{if(window.location.search==('?bloque=Editoriales')){editoriales(datos3);}else{
		if(window.location.search==('?bloque=Generos')){generos(datos4);}
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

function titulos(){
	
	document.querySelector(".wrapper").innerHTML+='<div class="modal"></div>';

	for (var i=0;i<datos1.length;i++){
		document.querySelector(".modal").innerHTML+=
	'<div class="unidad" id="'+datos1[i].id_titulo+'">'
	+'<a href="?id_titulo='+datos1[i].id_titulo+'">'
	+datos1[i].titulo+'</a></div>';
}
x=document.querySelectorAll(".unidad");

	x.forEach((v,i)=>{x[i].addEventListener("click",(event)=>{
	objetob=event.target;posicionb=objetob.getAttribute("id");posicion=posicionb-1
	document.querySelector(".wrapper").innerHTML+='<div class="modalb"></div>';
	document.querySelector(".modalb").innerHTML+=
	'<div class="unidadb">'+datos5[posicion].autor+' - '+
						   datos5[posicion].nacionalidad+' - '+
						   datos5[posicion].nacimiento+' - '+
						   datos5[posicion].FALLECE+'</div>';	
	})})

}

function autores(datos2){
	document.querySelector(".wrapper").innerHTML+='<div class="modal"></div>';

	for (var i=0;i<datos2.length;i++){
		document.querySelector(".modal").innerHTML+=
		'<a href=""><div class="unidad">'+datos2[i].autor+'</div></a>';
	}
}

function editoriales(datos3){
	document.querySelector(".wrapper").innerHTML+='<div class="modal"></div>';
	for (var i=0;i<datos3.length;i++){
		document.querySelector(".modal").innerHTML+=
		'<a href=""><div class="unidad">'+datos3[i].editorial+'</div></a>';
	}
}

function generos(datos4){
	document.querySelector(".wrapper").innerHTML+='<div class="modal"></div>';
	for (var i=0;i<datos4.length;i++){
		document.querySelector(".modal").innerHTML+=
		'<a href="?id_genero='+datos4[i].id_genero+'"><div class="unidad">'+
		datos4[i].genero+'</div></a>';
	}
/*	x=document.querySelectorAll(".unidad");console.log(x);

	x.forEach((v,i)=>{x[i].addEventListener("click",(event)=>{
	objetob=event.target;posicionb=objetob.getAttribute("id");posicion=posicionb-1
	document.querySelector(".wrapper").innerHTML+='<div class="modalb"></div>';
	document.querySelector(".modalb").innerHTML+=
	'<div class="unidadb">'+datos6[posicion].genero+' - '+
						   datos6[posicion].titulo+' - '+
						   datos6[posicion].idioma+' - '+
						   datos6[posicion].bilingue+'</div>';	
	})})*/
}
	
