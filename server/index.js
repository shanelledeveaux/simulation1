const express = require('express');
const bodyParser = require ('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();

const pc = require(`./controller`);


const app = express();
app.use(bodyParser.json());
app.use(cors());
massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));

//RESTFUL ENDPOINTS
app.get('/api/inventory', pc.getInventory);
app.post( '/api/product', pc.newProducts );


const port = process.env.PORT || 3000;
app.listen(port,() => {
    console.log(`Listening on port: ${port}`);
})