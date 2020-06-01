var MongoClient=require('mongodb').MongoClient;
var url='mongodb://localhost:27017/';
MongoClient.connect(url,function(err, db){
if(err) throw err;
var dbo=db.db("demodb");
dbo.collection("item").find().toArray(function(err,result) {
if(err) throw err;
console.log(result);
console.log(result[0].itemcode+", "+result[0].itemname+", "+result[0].itemprice);
db.close();
});
});