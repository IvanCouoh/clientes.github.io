const express = require("express");
const morgan = require("morgan");
const rutas = require("./routes/customer.routes");
const app = express();

app.set('port', process.env.PORT || 4000);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(rutas);
// app.use('/', inicio);
// app.use('/api/clientes', customerRoutes);

module.exports = app;