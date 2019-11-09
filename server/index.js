let express = require("express"),
  bodyParser = require("body-parser");
let mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://localhost",function(err, client) {
  let sandbox = client.db ("sandbox");
  let humans = sandbox.collection("humans");
  humans.insert({
    firstName: request.body.firstName,
    lastName: request.body.lastName

  }, function(err, result) {
    console.log(result);
    client.close();
  });
});
let app = express();
let urlencodedParser = bodyParser.urlencoded({ extended: false });
app.post("/enroll", urlencodedParser, function(request, response) {

});
app.listen(591);
