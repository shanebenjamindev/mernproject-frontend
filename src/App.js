import './App.css';
import renderRoutes from './routes';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

function App() {

  const fetchApi = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_KEY}/product/getAllProduct`)
    return res.data
  }
  const query = useQuery({queryKey: ['todo'], queryFn: fetchApi})

  return (
    <div className="App">
      <Suspense fallback={<>Loading...</>}>
        <BrowserRouter>
          <Routes>
            {renderRoutes()}
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
