const express = require ('express');
const app = express();
const morgan = require ('morgan');

//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Routes
app.use('/api/',require('./routes/index'));
app.use('/api/users',require('./routes/users'));

//starting server
app.listen(3000, () => {
    console.log(`Listen on port ${app.get('port')}`);
});
