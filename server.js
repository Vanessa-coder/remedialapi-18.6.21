const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 40000;

app.use(bodyParser.json({ limit: '100mb' }));
app.use(cors());

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT,GET,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

//THIS IS A POST ENDPOINT
app.post('/api/myPostEndpoint', function (req, res) {

  
    let bodyOfTheRequest = req.body;

    let fullName = `The full name is ${bodyOfTheRequest.firstname} ${bodyOfTheRequest.lastname}`

        res.send({
        "status": "OK",
        "message": fullName
    }

    );


})




//THIS IS A GET ENDPOINT
app.get('/api/myGetEndpoint', function (req, res) {

    res.send({
        "status": "OK",
        "message": 'HI EVERYONE'
    })

})


app.listen(port, function () {
    console.log(`RESTFUL API LISTENING AT THE PORT ${port} `);
})