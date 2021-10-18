var express = require('express');
const productHelpers = require('../helpers/product-helpers');
var router = express.Router();

var ProductHelper = require('../helpers/product-helpers')

// get home
router.get('/', function(req, res, next) {

  let products = [
    {
      name:"Tecno Spark 7T",
      category: "Mobile",
      description:"Click to open expanded view Tecno Spark 7T(Jewel Blue, 4GB RAM, 64GB Storage) 6000 mAh Battery| 48 MP AI Dual Rear Camera",
      image: "https://images-eu.ssl-images-amazon.com/images/I/413fM5GT3uS._SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
    name:"OPPO A74 5G",
      category: "Mobile",
      description:"OPPO A74 5G (Fantastic Purple,6GB RAM,128GB Storage) - 5G Android Smartphone | 5000 mAh Battery | 18W Fast Charge | 90Hz LCD Display",
      image: "https://images-eu.ssl-images-amazon.com/images/I/41BnHjRP0ZS._SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
      name:"Samsung Galaxy M21",
        category: "Mobile",
        description:"Samsung Galaxy M21 2021 Edition (Arctic Blue, 4GB RAM, 64GB Storage) | FHD+ sAMOLED | 6 Months Free Screen Replacement for Prime",
        image: "https://m.media-amazon.com/images/I/811lrGbXwIL._SY741_.jpg"
    },
      {
        name:"Redmi Note 9 Pro",
          category: "Mobile",
          description:"Redmi Note 9 Pro (Glacier White, 4GB RAM, 64GB Storage) - Latest 8nm Snapdragon 720G &Alexa Hands-Free Capable",
          image: "https://m.media-amazon.com/images/I/41+cwZKB5vL._SY300_SX300_.jpg"
        }
  ]


  res.render('admin/view-products', {admin:true, products});

  router.get('/add-products', function(req, res) {
    res.render('admin/add-products',{ admin:true});
  });

  router.post('/add-products', (req, res) => {
    console.log(req.body);
    console.log(req.files.Image);

    productHelpers.addProduct(req.body, (result) => {

      let image = req.files.image
      image.mv('./public/prodcut-images/'+id+'.jpg',(err,done) => {
        if(!err) res.render('admin/add-products');
        else console.log('we got an error'+err);
      });
    })

  });
  
});

module.exports = router;
