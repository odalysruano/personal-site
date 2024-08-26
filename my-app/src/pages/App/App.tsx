import { ChakraProvider } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import MyHomePage from '../MyHomePage/MyHomePage';

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<MyHomePage />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
