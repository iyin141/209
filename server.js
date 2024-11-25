const express = require('express');
const fs = require('fs');
const path = require('path');
const upload = require('./upload');
const engine = express();


//upload function


engine.use(express.json());


engine.use(express.static(path.join(__dirname)));


engine.post('/send', (req,res) => {
    const { name, email, message, date } = req.body;
    const entry = `<div class="display"><h5>Name: ${name}</h5>  <h6>Email: ${email}</h6> <h6>Task to remmeber: ${message}</h6> <h6>Date: ${date}</h6> </div>\n`;


    fs.appendFile('data.txt', entry, (err) => {
        if (err) {
            console.error('Error saving data:', err);
        }
        console.log('File appended')
        upload.run();
    });
});

engine.listen(9000, () => {
    console.log("link http://localhost:9000");
});
