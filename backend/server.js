import express from 'express';
import cors from 'cors';

const app = express();

// Allow requests from your Netlify frontend
const allowedOrigins = ['https://your-frontend.netlify.app'];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

// Route for jokes
app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      title: 'a joke',
      content: 'this is a joke'
    },
    {
      id: 2,
      title: 'a second joke',
      content: 'this is another joke'
    },
    {
      id: 3,
      title: 'a third joke',
      content: 'this is a third joke joke'
    }
  ];
  res.send(jokes);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server at http://localhost:${PORT}`);
});
