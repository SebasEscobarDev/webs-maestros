const express = require('express');
const morgan = require('morgan');
const app = express();

app.set('port', 5000);

//compialdo de datos
app.use(express.json());
//log de peticiones
app.use(morgan('dev'));
//use view engine, fast ajax and html write
app.set('view engine', 'ejs')

//routes
/*
app.get('/', (req, res) => {
	const data = [{name:'Jhon'},{name:'Carlos'},{name:'Cata'},{name:'Sebas'}];
	res.render('index.ejs', {people: data});
})
*/

app.get('/natan', (req, res) => {
	res.render('natan.ejs');
})

app.get('/agatha', (req, res) => {
	res.render('agatha.ejs');
})

app.get('/catalina', (req, res) => {
	res.render('catalina.ejs');
})

app.use(express.static('public'));

app.listen(app.get('port'), () => {
	console.log('Server iniciado en puerto: '+app.get('port'));
})
