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

// Body Parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes

app.use(require('./routes'));
app.use('/comprador', require('./routes/comprador'));
app.use('/vendedor', require('./routes/vendedor'));
app.use("/api/v1", require("./routes"));

// Start the server
app.listen(app.get('port'), () => {
    console.log("Server on port", app.get('port'));
})