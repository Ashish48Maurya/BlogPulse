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
const fs = require('fs')
const Post = require('./models/Post');
const authMiddleware = require('./middleware/auth');

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

app.post('/post', authMiddleware, upload.single('file'), async (req, res) => {
  const { originalname, path } = req.file;
  const parts = originalname.split('.');
  const ext = parts[parts.length - 1];
  const newPath = path + '.' + ext;

  fs.renameSync(path, newPath);

  const { title, description } = req.body;
  try {
    const user = req.User;
    if (!title || !description) {
      return res.status(422).json({ message: 'All Fields are Required!' });
    }
    const post = new Post({
      title,
      description,
      image: newPath,
    });

    const postData = await post.save();
    user.posts.push(postData._id);
    await user.save();

    return res.status(200).json({ message: 'Post Added successfully', postData });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});


mongoConnect(process.env.MONGO_URL).then(() => {

  app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  });
}).catch((err) => {
  console.error(err);
  process.exit(1);
});