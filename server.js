const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Lisstening on port ${port}`));

// Have Node serve the files for our built React app
ap.use(express.static(path.resolve(__dirname, './client/build')));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get('*', (req, res) => {
  res.sendFile(path.ressolve(__dirname, './client/build', 'index.html'));
});

app.get('/express_backend', (req, res) => {
  res.send({ express: 'Your express backend is connected to react' });
});
