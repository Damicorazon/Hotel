<?php

session_start(); // se positionne TOUJOURS en HAUT et en PREMIER avant tout traitement PHP ! 

//------------------------------------------
//Connexion à la BDD :
// $pdo = new PDO('mysql:host=localhost;dbname=vgv', 'root', 'root' ,
//  array( PDO::ATTR_ERRMODE=>PDO::ERRMODE_WARNING, PDO::MYSQL_ATTR_INIT_COMMAND=>"SET NAMES UTF8" ) );


 //-----------------------------------------------

//Définir une constante, pour avoir acces au dossier (HTDOCS,la racine du localhost)
define('URL', 'http://localhost:8888/PHP/HOTELSUCCESS/'); 

//----------------------------------------------------
//définir des variables : 
//créer à  vide
$content ='';
// content pour récupérer les contenu
$error='';
 