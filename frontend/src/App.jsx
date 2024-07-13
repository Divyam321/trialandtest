import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios.get(`${API_URL}/api/jokes`)
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [API_URL]);

  return (
    <>
      <h1>Divyam Full Stack</h1>
      <p>Jokes: {jokes.length}</p>
      {jokes.map((joke, index) => (
        <div key={index}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
