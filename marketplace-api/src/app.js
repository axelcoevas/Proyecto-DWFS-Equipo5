//Requerimientos
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

//Inicialización
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view.engine', '.hbs');

// Routes
app.use(require('./routes'));

// Start the server
app.listen(app.get('port'), () => {
    console.log("Server on port", app.get('port'));
})