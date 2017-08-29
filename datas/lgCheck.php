<?php
session_start();
if(!$_SESSION['uid']){
//    header('refresh:0; checkIn.php');
    header('location: http://localhost/JBindexMO/datas/admin/checkIn.php');
}