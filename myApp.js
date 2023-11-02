let express = require('express');
let app = express();
require('dotenv').config()

// console.log('Hello World');

// app.get('/', (req, res) => {
//     res.send('Hello Express');
// })

let absolutePath = __dirname + '/views/index.html'
app.get('/', (req, res) => {
    res.sendFile(absolutePath);
})

app.use('/public', express.static(__dirname + '/public'));

// app.get('/json', (req, res) => {
//     res.json({"message": "Hello json"});
// })  

app.get('/json', (req, res) => {
    let response = "Hello json"
    if(process.env.MESSAGE_STYLE == "uppercase") {
        response.toUpperCase();
    } 

    res.send(response)
})  

module.exports = app;
