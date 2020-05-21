<?php
$rollno=$_POST['rollno'];
$name=$_POST['name'];
$course=$_POST['course'];
$sql="INSERT INTO student VALUES('$rollno','$name','$course')";
$cn=mysqli_connect("localhost","root","","abes");
mysqli_query($cn,$sql) or die("unable to insert record");
mysqli_close($cn);
echo "done";
?>