import React from 'react';
import Navbar from './components/Navbar';
import List from './components/List';
import  { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then(res => res.json())
      .then(
        result => {
          setIsLoading(false);
          setData(result.results);
        },
        error => {
          setIsLoading(false);
          setError(error);
        }
      );
  }, []);

  return (
    <div>
      <Navbar />
      {
  data.map(item => (
    <List
      key={item.id.value}
      userAvatar={item.picture.large}
      firstName={item.name.first}
      lastName={item.name.last}
      email={item.email}
    />
  ))
}
    </div>
  );
}

export default App;