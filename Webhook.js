const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios');
//const mysql = require('mysql');
const port = 3000;
const qs = require('qs');


//////////Koneksi//////////////
/*
const conn = mysql.createConnection({
 host: 'localhost',
 user: 'root',
 password: 'mysql',
  database: 'dbjs'
});

*/

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post('/', (req, res) => {
        let CU  = req.body.data
        console.log(CU)
        res.status(200).send({ message: 'Data berhasil diterima ' }); 
   });

    //////////////////////////////////////222//////////////////////////////////
    app.post('/contactus', (req, res) => {
      const source = req.body.source; 
      const status = req.body.status; 
      const name = req.body.name; 
      const email = req.body.email;
      const department = req.body.department;
      const axios = require('axios');
      
      // query string 
      const queryString = `source=${source}&status=${status}&name=${name}&email=${email}&department=${department}`;
    
      axios.get(`http://endpoint/contactus?${queryString}`)
        .then((response) => {
          console.log('Respon dari Web 2:', response.data);
          res.status(200).send({ message: 'Data berhasil diterima dan disimpan pada web 2.' });
        })
        .catch((error) => {
          console.error('Error saat mengirim data :', error);
          res.status(500).send({ message: 'Gagal mengirim data .' });
        });
    });
      
app.listen(port, () => console.log('running http://localhost:' + port));
