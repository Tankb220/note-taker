const express= require('express');
const path = required('path');
const PORT= process.env.PORT ?? 3001;
const app = express();
const api = require('./route/index.js');
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(express.static('public'));

app.get('/notes', (req, res) => {
  return res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get('/*', (req, res) => {
    return res.sendFile(path.join(__dirname, "public/index.html"));
  });
  app.use('/', api);


app.listen(PORT, () =>{
    console.log(`Application is running @ http://localhost:${PORT}`);
});

