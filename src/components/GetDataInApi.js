import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      {data.slice(0,5).map((curElement) => (
        <div className='text-red-900' key={curElement.id}>
            <h1 className='text-5xl'>{curElement.id}</h1>
          <h2 className='text-white text-2xl'>{curElement.title}</h2>
          <p className="text-yellow-500">{curElement.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
