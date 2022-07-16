import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json')
    .then(response => {
      if(response.ok){
        return response.json()
      }
      throw response;
    })
    .then(data => {
      setData(data);
      console.log(data);
    })
    .catch(error => {
      console.error("Error Fetching Data: ", error);
      setError(error);
    })
  }, [])
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
