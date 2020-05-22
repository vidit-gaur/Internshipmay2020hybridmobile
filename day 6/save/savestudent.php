<?php
$data=$_POST['data'];
$s=json_encode($data);
$rollno=$s->rollno;
$name=$s->name;
$course=$s->course;

$sql="INSERT INTO student VALUES('$rollno','$name','$course')";
$cn=mysqli_connect("localhost","root","","abes");
mysqli_query($cn,$sql) or die("unable to insert record");
mysqli_close($cn);
echo "done";
?>