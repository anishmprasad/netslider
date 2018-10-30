var express=require('express');
var app = express();

app.set('port', (process.env.PORT || 3001));
app.use(express.static(__dirname));

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
