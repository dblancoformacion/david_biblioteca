<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Base datos</title>
<link rel="stylesheet" type="text/css" href="biblioteca.css">
<script type="text/javascript" src="biblioteca.js"></script> 
</head>
<body>  
<?php
        include_once "libreria.php";
        
        error_reporting(E_ERROR|E_WARNING|E_PARSE);

        switch($_GET['bloque']){
           
            case 'titulos':
                sql2js('inicio','logos',"SELECT id_titulo,titulo,idioma subtitulo,bilingue FROM titulos;");
                
                break;
            case 'generos':
                sql2js('inicio','logos',"SELECT distinct(genero) genero FROM generos;");
                break;
            case 'editoriales':
                sql2js('inicio','logos',"SELECT id_editorial,editorial FROM editoriales;");
                
                break;
            case 'autores':
                sql2js('inicio','logos',"SELECT id_autor,autor,nacionalidad subtitulo,nacimiento,fallece FROM autores;");
                break;
            
            default:
                sql2js('inicio','logos',"SELECT TABLE_NAME titulo FROM information_schema.tables WHERE table_schema LIKE 'logos';");
                break;
        }
        for($a=0;$a<10;$a++){
            if($_GET['bloque']==$a){sql2js('iniciob','logos',"SELECT * FROM autores JOIN (SELECT * FROM titulos JOIN escriben USING(id_titulo))c1 USING(id_autor) where id_titulo=".$_GET['bloque'].";");}}
        
       /* if(isset($_GET['id_titulo'])){
                $sql="SELECT * FROM titulos WHERE id_titulo=".$_GET['id_titulo'].";";
                sql2js('titulo','logos',$sql);*/
        

 echo '<div class="wrapper"></div>'      
?>

    
<div class="wrapper"></div>
    
</body>
</html>