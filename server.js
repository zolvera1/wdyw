/*
will have to create backend for use s
*/
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const app = express();
const yelp = require('yelp-fusion');
const apiToken = process.env.REACT_APP_API_KEY;
const client = yelp.client(apiToken)
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
const corsOptions  = {origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors())
app.get('/', function(req, res) {
    res.send('hello');
})


app.post('/search', function(req,res){
    const location = req.body
   const { address, city, state,radius } = location;
   client.search()
})

app.listen(port,() => {
    console.log(`app is listening in port ${port}`)
})
module.exports = app;