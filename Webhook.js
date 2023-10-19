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
        res.status(200).send({ message: 'Data berhasil diterima dan disimpan CRM' }); 
   });

    //////////////////////////////////////222//////////////////////////////////
    app.post('/contactus', (req, res) => {
      const source = req.body.source; 
      const status = req.body.status; 
      const department = req.body.department;
      const company = req.body.company;
      const name = req.body.name; 
      const email = req.body.email;
      const address = req.body.address;
      const description = req.body.description;
      //%23 pengganti hastag
      const tags = req.body.tags.split(',').map(tag => `%23${tag}`).join(',');
      //
      const axios = require('axios');
      
      // query string 
      const queryString = `source=${source}&status=${status}&department=${department}&company=${company}&name=${name}&email=${email}&address=${address}&description=${description}&tags=${tags}`;
      axios.get(`http://server/contactus2?${queryString}`)
        .then((response) => {
          console.log('data', queryString)
          console.log('Respon dari Web 2:', response.data);
          res.status(200).send({ message: 'Data berhasil diterima dan disimpan CRM.' });
        })
        .catch((error) => {
          console.error('Error saat mengirim data CRM:', error);
          res.status(500).send({ message: 'Gagal mengirim data CRM.' });
        });
    });
      
app.listen(port, () => console.log('running http://localhost:' + port));
