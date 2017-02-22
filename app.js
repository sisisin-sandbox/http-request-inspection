const express = require('express');
const app = express();
let i = 0;

app.use('/', express.static('html'));

const fn = (req, res) => {
  setTimeout(() => {
    i++;
    res.json({ message: 'ok', i });
  }, req.query.time || 0);
};
app.get('/api', fn);
app.get('/another', fn);

app.listen(3000, (err) => {
  if (err) { console.log(err); }
  console.log("server start at port 3000")
});
