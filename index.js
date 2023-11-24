const express = require('express');
const app = express();
const cors = require('cors');

const corsOps = {
  origin : `*`,
  credentials : true,
}

app.use(cors(corsOps));

app.get('/', (req, res) => {
  res.send('성공');
})


app.listen(3000, () => {
  console.log('success!!!');
})