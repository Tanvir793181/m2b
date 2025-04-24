// const multer = require('multer');
// const path = require('path');

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, 'uploads/'),
//   filename: (req, file, cb) => 
//     cb(null, `${file.originalname}`)
// });

// const upload = multer({ storage });

// module.exports = {
//   singleImage: upload.single('image'),
//   arrayImages: upload.array('photos'),
//   singlePhoto: upload.single('photo')
// };
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => {
    // Remove spaces and add timestamp to filename
    const cleanName = `${Date.now()}-${file.originalname.replace(/\s/g, '_')}`;
    cb(null, cleanName);
  }
});

const upload = multer({ storage });

module.exports = {
  singleImage: upload.single('image'),
  arrayImages: upload.array('photos'),
  singlePhoto: upload.single('photo')
};