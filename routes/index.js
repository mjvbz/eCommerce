var express = require('express');
var router = express.Router();


// importing MongoDB install MongoDB with ( npm install MongoDB )

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
        },
  ]

  res.render('index', { products });
});

module.exports = router;
