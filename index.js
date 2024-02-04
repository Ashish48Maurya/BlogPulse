const express = require('express');
const app = express();
const port = 8000;
const routes = require('./routers/routers');
const mongoConnect = require('./db');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

app.post('/post', upload.single('file'), (req,res)=>{
  try {
    const file = req.file;
    return res.status(200).json({ message: 'File uploaded successfully', file });
    // return res.json("ok");
  } catch (error) {
    console.error("Error:",error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
})


mongoConnect(process.env.MONGO_URL).then(() => {

  app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  });
}).catch((err) => {
  console.error(err);
  process.exit(1);
});