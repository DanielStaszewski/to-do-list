//multer setup
const multer = require('multer');

//disk storage
const storage = multer.diskStorage({   
  destination: function(req, file, cb) { 
     cb(null, './uploads');    
  }, 
  filename: function (req, file, cb) { 
     cb(null , file.fieldname + '-' + Date.now());   
  }
});

//multer initialization
const upload = multer({
  storage: storage,
  limits : {fileSize : 1000000}
});

module.exports = upload;