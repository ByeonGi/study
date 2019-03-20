const express = require('express');

const app = express();

app.use(express.static('dist'));

app.get('/api/getUsername', (req, res)=>{
  res.send('hi!')
});

app.listen(8080, () => console.log('listening on Port 8080!'));
