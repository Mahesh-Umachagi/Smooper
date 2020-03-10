const express = require ('express');
const bodyparser = require ('body-parser');
const cors = require ('cors');

const PORT = 3000;
const api = require ('./routes/api');
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors());

app.use('/api', api);

app.get('/', (req, res) => {
  res.send("Hello from Server");
});

app.listen(PORT, () => console.log("Server running on PORT : " +PORT));