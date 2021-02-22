const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, './client/build')));


app.get('/express_backend', (req, res) => {
  res.send({ express: 'Your express backend is connected to react' });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});
