<!--vidit-gaur-->
<?php
$empid=$_POST['empid'];
$sql="SELECT * FROM employee WHERE empid='$empid'";
$cn=mysqli_connect("localhost","root","","demodb");
$result=mysqli_query($cn,$sql);
$count=mysqli_num_rows($result);
if($count==0){
    echo "Sorry! Invalid Employee ID";
}
else{
    $row=mysqli_fetch_array($result);
    $obj=(object)[];
    $obj->name=$row["name"];
    $obj->designation=$row["designation"];
    $obj->salary=$row["salary"];
    $data=json_encode($obj); //creating a JSON string
    echo $data;
}
mysqli_close($cn);
?>
<!--vidit-gaur-->