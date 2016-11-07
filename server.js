var express = require('express');
var path = require('path');
var app = express();


app.use('/', express.static(__dirname + '/public'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist')); 
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); 
app.use('/fonts', express.static(__dirname + '/node_modules/bootstrap/dist/fonts')); 
app.use('/angular', express.static(__dirname + '/node_modules/angular')); 
app.use('/angular-route', express.static(__dirname + '/node_modules/angular-route')); 
app.use('/angular-local-storage', express.static(__dirname + '/node_modules/angular-local-storage/dist')); 

app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Servidor rodando em http://localhost:' + port);
});