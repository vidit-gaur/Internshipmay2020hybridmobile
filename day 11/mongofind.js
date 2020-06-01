var MongoClient=require('mongodb').MongoClient;
var url='mongodb://localhost:27017/';
MongoClient.connect(url,function(err, db){
if(err) throw err;
var dbo=db.db("demo");
dbo.collection("student").find().toArray(function(err,result) {
if(err) throw err;
console.log(result);
console.log(result[0].rollno+", "+result[0].name);
db.close();
});
});