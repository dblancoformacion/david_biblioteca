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
                sql2js('datos5','logos',"SELECT autor,nacionalidad,nacimiento,fallece FROM autores JOIN escriben USING(id_autor);");
                break;
            case 'Generos':
                sql2js('datos4','logos',"SELECT distinct(genero) FROM generos;");
                break;
            case 'Editoriales':
                sql2js('datos3','logos',"SELECT * FROM editoriales;");
                sql2js('datos6','logos',"SELECT * FROM editoriales LEFT JOIN (SELECT * FROM titulos JOIN publican p USING(id_titulo))c1 USING(id_editorial);");
                break;
            case 'Autores':
                sql2js('datos2','logos',"SELECT id_autor,autor,nacionalidad,nacimiento,fallece FROM autores;");
                break;
            default:
                break;
        }
        if(isset($_GET['id_titulo'])){
                $sql="SELECT * FROM titulos WHERE id_titulo=".$_GET['id_titulo'].";";
                sql2js('titulo','logos',$sql);
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