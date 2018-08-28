<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Base datos</title>
<?php
        include_once "libreria.php";
        
        error_reporting(E_ERROR|E_WARNING|E_PARSE);

        switch($_GET['bloque']){
           
            case 'Titulos':
                sql2js('datos1','logos',"SELECT * FROM titulos;");
                sql2js('datos5','logos',"SELECT autor,nacionalidad,nacimiento,FALLECE FROM autores JOIN escriben USING(id_autor);");
                break;
            case 'Generos':
                sql2js('datos4','logos',"SELECT distinct(genero),id_genero FROM generos;");
                break;
            case 'id_genero'.$_GET['id_genero']:
                sql2js('datos6','logos',"SELECT id_genero,genero,titulo,idioma,bilingue FROM titulos JOIN(SELECT * FROM expresan JOIN generos
                            USING(id_genero)) c1 USING (id_titulo) where id_genero=".$_GET['?id_genero'].";");
                break;
            case 'Editoriales':
                sql2js('datos3','logos',"SELECT distinct(editorial) FROM editoriales;");
                break;
            case 'Autores':
                sql2js('datos2','logos',"SELECT distinct(autor) FROM autores;");
                break;
            
            default:
                break;

        }
       /* if(isset($_GET['id_titulo']))
            sql2js('datos5','logos',"SELECT autor,nacionalidad,nacimiento,FALLECE FROM autores JOIN escriben USING(id_autor) WHERE id_titulo=".$_GET['id_titulo'].";");*/
        
            
    
?>
    <link rel="stylesheet" type="text/css" href="biblioteca.css">
    <script type="text/javascript" src="biblioteca.js"></script>
</head>

<body>
    <div class="wrapper"></div>




</body>
</html>