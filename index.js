const express = require('express');
const app = express();
app.use(express.json());

const path = require('path');

const homePage = path.join(__dirname, '/index.html');

app.get('/', (req, res)=> res.sendFile(homePage));

app.use('/dist', express.static(path.join(__dirname, '/dist')));
app.use('/assets', express.static(path.join(__dirname, '/assets')));

app.use((err, req, res, next)=> {
  console.log(err);
  res.status(err.status || 500).send({ error: err, message: err.message });
});

const init = async()=> {
    const port = process.env.PORT || 3001;
    app.listen(port, ()=> {
      console.log(`listening on port ${port}`);
    });
  }
  
  init();