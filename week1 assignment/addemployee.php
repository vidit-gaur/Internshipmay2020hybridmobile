<!--vidit-gaur-->
<?php
$data=$_POST['data'];
$s=json_decode($data); //conversion to PHP object
$empid=$s->empid;
$name=$s->name;
$designation=$s->designation;
$salary=$s->salary;

$sql="INSERT INTO employee VALUES('$empid','$name','$designation','$salary')";
$cn=mysqli_connect("localhost","root","","demodb") or die("Unable to connect");
mysqli_query($cn,$sql) or die("Unable to insert record");
mysqli_close($cn);
echo "done";
?>
<!--vidit-gaur-->