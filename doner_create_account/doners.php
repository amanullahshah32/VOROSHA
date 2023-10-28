<?php

if(isset($_POST['submit']))
{
    $name=$_POST['firstname'];
    $email=$_POST['email'];
    //$mobile=$_POST['mobile'];
    //$city=$_POST['city'];

    $host='localhost';
    $user='root';
    $pass='';
    $dbname='vorosha';

    $conn=mysqli_connect($host,$user,$pass,$dbname);

    $sql="INSERT INTO donors(First_Name, Email)
    values('$name','$email')";

    mysqli_query($conn, $sql);
}

?>