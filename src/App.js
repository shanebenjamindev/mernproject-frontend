import './App.css';
import renderRoutes from './routes';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Suspense } from 'react';

function App() {
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
