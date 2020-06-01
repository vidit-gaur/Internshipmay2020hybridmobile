var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("demodb");
  var myobj = { itemcode: "1174", itemname: "TV", itemprice: "20000" };
  dbo.collection("item").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 item document inserted");
    db.close();
  });
});