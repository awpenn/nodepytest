require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes');
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded( { extended: true } ));
app.use(express.json());

app.use(routes);

//true drops tables at startup, false will create if not extant
var syncOptions = { force: true };


if( process.env.NODE_ENV === 'test'){
    syncOptions.force = true;
}


app.listen(PORT, function(){
    console.log(`App listening on PORT ${PORT}`);
});



//connection test
// app.listen(PORT, function(){
//     console.log(`connect test, listening on port ${PORT}`)
// })