/*
will have to create backend for use s
*/
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT || 3001;
const app = express();
const yelp = require('yelp-fusion');
const apiToken = process.env.REACT_APP_API_KEY;

const client = yelp.client(apiToken.toString())
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
    
   const { address, city, addresstwo, zip, state,radius, price} = location.data;
   const updatedPrice = price.toString()
   console.log(req.body)
    console.log(updatedPrice)
   client.search({
        term: 'restaurants',
        location: `${address} ${addresstwo} ${city}, ${state} ${zip}`,
        radius: Math.floor(radius/0.00062137),
        price: updatedPrice
   }).then( resp => {
    //    if(resp.jsonBody.businesses.length == 0) {
    //        res.sendStatus(400).send("error")
    //    } else {
        const options = resp.jsonBody.businesses;
        const option = options[Math.floor(Math.random()*options.length)];
        res.send(option)
       
   }).catch(e => console.log(e))
})

app.listen(port,() => {
    console.log(`app is listening in port ${port}`)
})
module.exports = app;