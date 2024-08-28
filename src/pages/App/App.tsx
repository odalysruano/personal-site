import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import HomePage from '../HomePage/HomePage';

function App() {
  return (
    <ChakraProvider>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer></Footer>
    </ChakraProvider>
  );
}

export default App;
